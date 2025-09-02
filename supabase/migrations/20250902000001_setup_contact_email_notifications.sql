-- Create contact_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact form)
CREATE POLICY "Allow anonymous inserts" ON contact_messages
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all records
CREATE POLICY "Allow authenticated read" ON contact_messages
  FOR SELECT TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update records
CREATE POLICY "Allow authenticated update" ON contact_messages
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to trigger email notification
CREATE OR REPLACE FUNCTION trigger_contact_email()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Call the Edge Function to send email notification
  SELECT
    net.http_post(
      url := 'https://your-project-ref.supabase.co/functions/v1/send-contact-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object(
        'record', row_to_json(NEW)
      )
    ) INTO request_id;
  
  -- Log the request ID for debugging
  RAISE LOG 'Email notification request ID: %', request_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically send email on new contact form submissions
DROP TRIGGER IF EXISTS contact_email_trigger ON contact_messages;
CREATE TRIGGER contact_email_trigger
  AFTER INSERT ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION trigger_contact_email();

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at timestamp
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON contact_messages;
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);
  
CREATE INDEX IF NOT EXISTS idx_contact_messages_status 
  ON contact_messages(status);

-- Insert sample data (optional, for testing)
-- INSERT INTO contact_messages (name, email, company, message) 
-- VALUES ('Test User', 'test@example.com', 'Test Company', 'This is a test message');

COMMENT ON TABLE contact_messages IS 'Stores contact form submissions from the website';
COMMENT ON TRIGGER contact_email_trigger ON contact_messages IS 'Automatically sends email notifications when new contact forms are submitted';