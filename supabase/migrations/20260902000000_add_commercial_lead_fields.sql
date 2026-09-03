-- Backfill sms_consent (was added directly in production without a tracked migration)
ALTER TABLE public.quote_requests ADD COLUMN IF NOT EXISTS sms_consent boolean NOT NULL DEFAULT false;

-- Support commercial quote requests alongside residential ones
ALTER TABLE public.quote_requests ADD COLUMN IF NOT EXISTS property_type text NOT NULL DEFAULT 'residential';
ALTER TABLE public.quote_requests ADD COLUMN IF NOT EXISTS business_name text;
ALTER TABLE public.quote_requests ADD COLUMN IF NOT EXISTS water_access boolean;
ALTER TABLE public.quote_requests ADD COLUMN IF NOT EXISTS recurring_interest boolean;
