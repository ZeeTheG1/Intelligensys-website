import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const NOTIFICATION_EMAIL = 'intelligensys-cloud@intelligensys.io'

interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  created_at: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { record }: { record: ContactFormData } = await req.json()

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${record.name}`
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #4a5568; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border-left: 4px solid #2563eb; }
            .message-field .value { min-height: 100px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #6b7280; }
            .cta { background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>🧠 New Inquiry - Intelligensys</h2>
            <p>Someone is interested in your AI automation services!</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">👤 Name:</span>
              <div class="value">${record.name}</div>
            </div>
            
            <div class="field">
              <span class="label">📧 Email:</span>
              <div class="value">${record.email}</div>
            </div>
            
            ${record.company ? `
            <div class="field">
              <span class="label">🏢 Company:</span>
              <div class="value">${record.company}</div>
            </div>
            ` : ''}
            
            <div class="field message-field">
              <span class="label">💬 Message:</span>
              <div class="value">${record.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field">
              <span class="label">📅 Submitted:</span>
              <div class="value">${new Date(record.created_at).toLocaleString()}</div>
            </div>
            
            <a href="mailto:${record.email}" class="cta">Reply to ${record.name}</a>
          </div>
          
          <div class="footer">
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Reply to this inquiry within 24 hours for best conversion</li>
              <li>Check if this is a qualified lead for AI automation services</li>
              <li>Add to your CRM system for follow-up tracking</li>
            </ul>
            <p>This email was automatically generated from your Intelligensys website contact form.</p>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Contact Form Submission - Intelligensys

Name: ${record.name}
Email: ${record.email}
Company: ${record.company || 'Not provided'}
Message: ${record.message}
Submitted: ${new Date(record.created_at).toLocaleString()}

Reply to this inquiry at: ${record.email}
    `

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Intelligensys Website <noreply@intelligensys.io>',
        to: [NOTIFICATION_EMAIL],
        reply_to: record.email,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
        tags: [
          {
            name: 'category',
            value: 'contact-form'
          }
        ]
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error('Failed to send email:', error)
      throw new Error(`Email service error: ${emailResponse.status}`)
    }

    const result = await emailResponse.json()
    console.log('Email sent successfully:', result.id)

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: result.id,
        message: 'Contact form notification sent successfully'
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send notification email',
        details: error.message
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})