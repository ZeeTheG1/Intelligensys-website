/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person contacting
      - `email` (text, required) - Email address for follow-up
      - `company` (text, optional) - Company name if provided
      - `message` (text, required) - The message content
      - `created_at` (timestamp) - When the message was sent
      - `status` (text, default 'new') - Message status for tracking

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting new messages (public access for contact form)
    - Add policy for reading messages (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages (for the public contact form)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read contact messages (for admin access)
CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);