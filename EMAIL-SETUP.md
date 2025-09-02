# Email Notification Setup Guide

## Overview
This guide explains how to set up email notifications for contact form submissions to `intelligensys-cloud@intelligensys.io`.

## 🎯 What You'll Get

When a potential customer submits the contact form, you'll receive a professionally formatted email notification containing:
- Customer's name, email, company, and message
- Timestamp of submission
- Quick-reply button that opens your email client
- Analytics tracking for conversion optimization

## 📧 Email Service Options

### Option 1: Resend API (Recommended)
**Pros:** Simple setup, reliable delivery, great developer experience
**Cons:** Paid service after free tier (100 emails/month free)

### Option 2: Supabase Edge Functions + Resend
**Pros:** More control, server-side processing, better security
**Cons:** More complex setup, requires Supabase configuration

## 🚀 Quick Setup (Resend API Method)

### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email and complete onboarding
3. Add your domain `intelligensys.io` (optional but recommended)

### Step 2: Get API Key
1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it "Intelligensys Website"
4. Copy the key (starts with `re_`)

### Step 3: Configure Railway Environment Variables
In your Railway dashboard, add:
```bash
VITE_RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Test the Setup
1. Deploy the changes to Railway
2. Visit your website and submit a test contact form
3. Check your email at `intelligensys-cloud@intelligensys.io`

## 🔧 Advanced Setup (Supabase Edge Functions)

### Step 1: Deploy Edge Function
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Deploy the function
supabase functions deploy send-contact-email
```

### Step 2: Configure Supabase Environment Variables
In your Supabase dashboard → Settings → Edge Functions:
```bash
RESEND_API_KEY=re_your_api_key_here
```

### Step 3: Run Database Migration
```bash
# Apply the migration
supabase db push

# Or manually run the SQL in your Supabase SQL editor
```

## 📋 Environment Variables Reference

### Required for Email Notifications
```bash
# Resend API Method
VITE_RESEND_API_KEY=re_your_resend_api_key

# Notification recipient (hardcoded in the system)
# intelligensys-cloud@intelligensys.io
```

### Optional Configuration
```bash
# Custom site URL for links in emails
VITE_SITE_URL=https://intelligensys.com

# Alternative notification email (if needed)
VITE_NOTIFICATION_EMAIL=intelligensys-cloud@intelligensys.io
```

## 🧪 Testing Your Setup

### Test Contact Form Submission
1. **Visit your website**
2. **Fill out the contact form** with test data:
   - Name: "Test User"
   - Email: "test@example.com" 
   - Company: "Test Company"
   - Message: "This is a test message"
3. **Submit the form**
4. **Check for email** at `intelligensys-cloud@intelligensys.io`

### Verify Email Content
The email should include:
- ✅ Professionally formatted HTML design
- ✅ All form data clearly displayed
- ✅ Reply button that opens email client
- ✅ Timestamp of submission
- ✅ Proper sender and reply-to addresses

### Debug Common Issues

**Email not received?**
- Check spam/junk folder
- Verify Resend API key is correct
- Check browser console for error messages
- Verify Railway environment variables are set

**Form submission works but no email?**
- Check Railway deployment logs
- Verify Resend account has remaining quota
- Check Resend dashboard for delivery status

## 📊 Monitoring & Analytics

### Email Delivery Tracking
- **Resend Dashboard**: View delivery status, opens, clicks
- **Sentry**: Automatic error tracking for failed email sends
- **PostHog**: Track form submissions and email success rates

### Performance Metrics
The system tracks:
- Form submission success rate
- Email delivery success rate
- Time to send notifications
- User engagement with replies

## 🔒 Security & Privacy

### Data Protection
- Contact form data stored securely in Supabase
- Email content includes only submitted information
- No sensitive business data included in notifications
- GDPR compliant data handling

### Email Security
- Proper SPF/DKIM configuration recommended for domain
- Reply-to address set to original submitter
- No executable attachments or suspicious content
- Professional sender identification

## 🛠️ Maintenance

### Regular Tasks
- Monitor Resend quota usage
- Review email delivery reports monthly
- Update notification email if needed
- Test form submission quarterly

### Troubleshooting
- Check Railway deployment logs for errors
- Monitor Sentry for email delivery failures
- Verify DNS settings if using custom domain
- Test email deliverability regularly

## 💰 Cost Considerations

### Resend Pricing (as of 2025)
- **Free Tier**: 100 emails/month
- **Pro Plan**: $20/month for 50,000 emails
- **Enterprise**: Custom pricing for higher volumes

### Expected Usage
- Estimated 10-50 contact forms per month
- Well within free tier limits initially
- Upgrade as business grows

## 📞 Support

If you encounter issues:
1. Check this documentation first
2. Review Railway deployment logs
3. Check Resend dashboard for delivery status
4. Test with a simple form submission
5. Contact your development team if problems persist

## 🚀 Next Steps

After setup is complete:
1. **Test the system** with real data
2. **Monitor email delivery** for the first week
3. **Set up email rules** in your email client for organization
4. **Consider upgrading** Resend plan if volume increases
5. **Document your process** for team members