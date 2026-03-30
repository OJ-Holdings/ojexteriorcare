
-- Create quote_requests table
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  service_needed TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admin) can view
CREATE POLICY "Authenticated users can view quote requests"
  ON public.quote_requests FOR SELECT
  TO authenticated
  USING (true);
