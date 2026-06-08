-- Lock down contact_rate_limits: only service_role (edge function) should access it.
-- RLS is enabled but no policies exist; add an explicit deny policy for clarity.
REVOKE ALL ON public.contact_rate_limits FROM anon, authenticated;
GRANT ALL ON public.contact_rate_limits TO service_role;

CREATE POLICY "No client access to rate limits"
ON public.contact_rate_limits
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);