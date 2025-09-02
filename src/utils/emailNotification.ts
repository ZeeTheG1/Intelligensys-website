import { supabase } from '../lib/supabase';
import { env } from './env';

interface EmailNotificationData {
  name: string;
  email: string;
  company?: string;
  message: string;
  submissionId?: string;
}

export const sendEmailNotification = async (formData: EmailNotificationData) => {
  try {
    // Call the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        record: {
          ...formData,
          created_at: new Date().toISOString(),
        }
      }
    });

    if (error) {
      console.error('Failed to send email notification:', error);
      // Don't throw error - form submission should still succeed even if email fails
      return { success: false, error: error.message };
    }

    console.log('Email notification sent successfully:', data);
    return { success: true, data };

  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw error - form submission should still succeed even if email fails
    return { success: false, error: error.message };
  }
};

// Alternative email service using a third-party API (Resend)
export const sendEmailViaResend = async (formData: EmailNotificationData) => {
  const resendApiKey = env.email.resendApiKey;
  
  if (!resendApiKey) {
    console.warn('Resend API key not configured - email notification disabled');
    return { success: false, error: 'Email service not configured' };
  }

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">🧠 New Contact Form Submission</h2>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Intelligensys Website Inquiry</p>
      </div>
      
      <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
        <div style="margin-bottom: 20px;">
          <strong style="color: #4a5568;">👤 Name:</strong><br>
          <div style="background: white; padding: 12px; border-radius: 4px; margin-top: 5px; border-left: 4px solid #2563eb;">
            ${formData.name}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #4a5568;">📧 Email:</strong><br>
          <div style="background: white; padding: 12px; border-radius: 4px; margin-top: 5px; border-left: 4px solid #2563eb;">
            <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a>
          </div>
        </div>
        
        ${formData.company ? `
        <div style="margin-bottom: 20px;">
          <strong style="color: #4a5568;">🏢 Company:</strong><br>
          <div style="background: white; padding: 12px; border-radius: 4px; margin-top: 5px; border-left: 4px solid #2563eb;">
            ${formData.company}
          </div>
        </div>
        ` : ''}
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #4a5568;">💬 Message:</strong><br>
          <div style="background: white; padding: 12px; border-radius: 4px; margin-top: 5px; border-left: 4px solid #2563eb; min-height: 80px;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${formData.email}?subject=Re: Your inquiry about AI automation services" 
             style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Reply to ${formData.name}
          </a>
        </div>
      </div>
      
      <div style="margin-top: 20px; padding: 20px; background: #f1f5f9; border-radius: 8px; font-size: 14px; color: #6b7280;">
        <p><strong>💡 Next Steps:</strong></p>
        <ul style="margin: 10px 0;">
          <li>Respond within 24 hours for best conversion rates</li>
          <li>Qualify the lead for AI automation needs</li>
          <li>Schedule a discovery call if appropriate</li>
        </ul>
        <p style="margin-top: 15px; font-size: 12px;">
          This notification was automatically sent from your Intelligensys website contact form.
        </p>
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Intelligensys Website <noreply@intelligensys.io>',
        to: ['intelligensys-cloud@intelligensys.io'],
        reply_to: formData.email,
        subject: `New Contact Form Submission from ${formData.name}`,
        html: emailHtml,
        text: `
New Contact Form Submission - Intelligensys

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Message: ${formData.message}
Submitted: ${new Date().toLocaleString()}

Reply to: ${formData.email}
        `,
        tags: [
          {
            name: 'category',
            value: 'contact-form'
          }
        ]
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${response.status} - ${error}`);
    }

    const result = await response.json();
    console.log('Email sent via Resend:', result.id);
    
    return { success: true, emailId: result.id };

  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return { success: false, error: error.message };
  }
};