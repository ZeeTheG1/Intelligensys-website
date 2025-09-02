import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase, type ContactMessage } from '../lib/supabase';
import { trackContactFormSubmission, trackCTAClick } from '../utils/analytics';
import { captureException } from '../utils/sentry';
import { sendEmailNotification, sendEmailViaResend } from '../utils/emailNotification';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const messageData: ContactMessage = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        message: formData.message,
      };

      const { data: insertData, error } = await supabase
        .from('contact_messages')
        .insert([messageData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Send email notification (try Supabase Edge Function first, fallback to Resend)
      let emailResult = await sendEmailNotification({
        ...messageData,
        submissionId: insertData?.id
      });

      // If Supabase Edge Function fails, try Resend as fallback
      if (!emailResult.success) {
        console.log('Supabase email failed, trying Resend fallback...');
        emailResult = await sendEmailViaResend(messageData);
      }

      // Log email result but don't fail the form submission if email fails
      if (emailResult.success) {
        console.log('Email notification sent successfully');
      } else {
        console.warn('Failed to send email notification:', emailResult.error);
        // Capture email failure for monitoring but don't show error to user
        captureException(new Error(`Email notification failed: ${emailResult.error}`));
      }

      // Track successful form submission
      trackContactFormSubmission({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        source: 'contact_page',
        emailSent: emailResult.success
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      captureException(error as Error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our AI automation experts to discuss your project and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Let's Start a Conversation</h3>
              <p className="text-gray-600">
                Whether you're looking to automate a specific process or transform your entire operation, we're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email Us</div>
                  <div className="text-gray-600">intelligensys-cloud@intelligensys.io</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Call Us</div>
                  <div className="text-gray-600">+44 20 8044 8927</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Visit Us</div>
                  <div className="text-gray-600">71-75 Shelton Street, Covent Garden, London, UK</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project and automation needs..."
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;