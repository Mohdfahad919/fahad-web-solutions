CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  ip_address text PRIMARY KEY,
  request_count integer NOT NULL DEFAULT 0,
  window_start timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS contact_rate_limits_window_start_idx ON public.contact_rate_limits (window_start);
GRANT ALL ON public.contact_rate_limits TO service_role;
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;