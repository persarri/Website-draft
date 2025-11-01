/*
  # School Website Database Schema

  1. New Tables
    - `announcements`
      - `id` (uuid, primary key)
      - `title` (text) - Announcement title
      - `content` (text) - Full announcement content
      - `category` (text) - Category like 'general', 'academic', 'sports', 'events'
      - `published_date` (timestamptz) - When announcement was published
      - `is_featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamptz)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `event_date` (timestamptz) - When event occurs
      - `location` (text) - Event location
      - `category` (text) - Category like 'academic', 'sports', 'cultural', 'parent-meeting'
      - `created_at` (timestamptz)
    
    - `staff`
      - `id` (uuid, primary key)
      - `name` (text) - Staff member name
      - `position` (text) - Job title/position
      - `department` (text) - Department like 'Administration', 'Teaching', 'Support'
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone (optional)
      - `bio` (text) - Short biography (optional)
      - `display_order` (integer) - Order for displaying staff
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `status` (text) - Status like 'new', 'read', 'responded'
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for announcements, events, and staff (school information is public)
    - Contact submissions are write-only for public, read-only for authenticated admins
    - Admin access patterns would require additional auth setup
*/

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  published_date timestamptz DEFAULT now(),
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date timestamptz NOT NULL,
  location text NOT NULL,
  category text NOT NULL DEFAULT 'academic',
  created_at timestamptz DEFAULT now()
);

-- Create staff table
CREATE TABLE IF NOT EXISTS staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  department text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  bio text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public read access for announcements
CREATE POLICY "Anyone can view announcements"
  ON announcements FOR SELECT
  USING (true);

-- Public read access for events
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

-- Public read access for staff
CREATE POLICY "Anyone can view staff"
  ON staff FOR SELECT
  USING (true);

-- Public can submit contact forms
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_announcements_published_date ON announcements(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_announcements_featured ON announcements(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_staff_display_order ON staff(display_order);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);