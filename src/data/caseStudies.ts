export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  category: string;
  image: string;
  summary: string;
  duration: string;
  location: string;
  serviceSlug: string;
  serviceName: string;
  relatedBlogSlugs: string[];
  challenge: string[];
  strategy: string[];
  solution: string[];
  results: { metric: string; value: string; detail: string }[];
  technologies: string[];
  testimonial: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "techstart-solutions-saas-website",
    client: "TechStart Solutions",
    industry: "B2B SaaS",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fm=webp&auto=format",
    summary: "How we rebuilt a sluggish WordPress site into a lightning-fast React platform and grew organic traffic 180% in 6 months for a Lucknow-based SaaS startup.",
    duration: "6 weeks build · 6 months tracked",
    location: "Lucknow, Uttar Pradesh",
    serviceSlug: "website-development-lucknow",
    serviceName: "Website Development in Lucknow",
    relatedBlogSlugs: ["core-web-vitals-2026", "react-vs-wordpress"],
    challenge: [
      "TechStart's legacy WordPress site loaded in 8.4 seconds on 4G — well above Google's 2.5s LCP threshold — and bounced 71% of mobile visitors before the hero even rendered.",
      "Their stack relied on 14 plugins, three page builders and a bloated theme. Every product update required a developer, and every Core Web Vitals audit flagged the site as 'Poor'.",
      "Organic traffic had plateaued at ~2,400 monthly sessions despite consistent blog publishing, and the sales team reported that demo-request quality was dropping month over month.",
    ],
    strategy: [
      "We ran a full technical SEO audit, mapped every ranking URL, and locked in a 1:1 redirect plan so zero link equity would be lost during migration.",
      "Chose a headless React + Vite + TypeScript architecture with Supabase for auth and CMS — giving the team a Notion-style editor without sacrificing performance.",
      "Designed a conversion-first information architecture: pricing surfaced from the nav, a sticky 'Book Demo' CTA on every long-form page, and dedicated landing pages for the top 12 commercial keywords.",
    ],
    solution: [
      "Rebuilt the site with React 18, Vite 5 and Tailwind CSS, shipping a sub-90KB initial JS bundle and inlining critical CSS for first paint under 1.1s.",
      "Implemented edge image optimization (AVIF + WebP), lazy-loaded every below-the-fold asset, and added preconnect hints for Google Fonts and the CDN.",
      "Wrote LocalBusiness, Organization, FAQ and Service JSON-LD schema on every page; rebuilt the XML sitemap; and connected Search Console + GA4 for weekly reporting.",
      "Launched 12 hyper-targeted programmatic landing pages around 'SaaS development in Lucknow' and adjacent transactional queries.",
    ],
    results: [
      { metric: "Organic traffic", value: "+180%", detail: "2,400 → 6,720 monthly sessions in 6 months" },
      { metric: "Mobile LCP", value: "1.2s", detail: "Down from 8.4s — now in Google's 'Good' bucket" },
      { metric: "Demo bookings", value: "2.4×", detail: "From 28 → 67 qualified demos per month" },
      { metric: "Bounce rate", value: "-44%", detail: "71% → 27% on mobile" },
      { metric: "Lighthouse score", value: "98 / 100", detail: "Performance, Accessibility, SEO, Best Practices" },
      { metric: "Indexed pages", value: "+312%", detail: "From 43 → 178 in Search Console" },
    ],
    technologies: ["React 18", "Vite 5", "TypeScript", "Tailwind CSS", "Supabase", "Vercel Edge", "Cloudflare R2", "Google Analytics 4", "Search Console", "Schema.org JSON-LD"],
    testimonial: {
      quote: "Fahad's team didn't just rebuild our site — they rebuilt our pipeline. Demo bookings more than doubled in the first quarter post-launch.",
      author: "Aman Verma",
      role: "Co-founder, TechStart Solutions",
    },
  },
  {
    slug: "stylehub-fashion-shopify-store",
    client: "StyleHub Fashion",
    industry: "Fashion E-commerce",
    category: "E-commerce Development",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&fm=webp&auto=format",
    summary: "We built a custom Shopify storefront for a Lucknow boutique that scaled from ₹25K to ₹2L+ monthly online sales in 90 days.",
    duration: "4 weeks build · 3 months tracked",
    location: "Hazratganj, Lucknow",
    serviceSlug: "ecommerce-website-development-lucknow",
    serviceName: "E-commerce Website Development",
    relatedBlogSlugs: ["shopify-vs-woocommerce", "ecommerce-conversion-optimization"],
    challenge: [
      "StyleHub had a physical store in Hazratganj but no functioning online channel. Their existing Instagram-only sales process leaked roughly 40% of orders to DM confusion and lost shipping addresses.",
      "Cart abandonment on the temporary Linktree page was 88%, and they had no way to retarget, run discount campaigns or measure ROAS on Meta ad spend.",
      "Product photography lived across three phones, four staff accounts and zero size charts — making catalog setup a blocker for any developer.",
    ],
    strategy: [
      "Positioned Shopify as the operations backbone (inventory, orders, COD, Shiprocket) and layered a custom React-rendered storefront on top for branding and speed.",
      "Designed a mobile-first checkout (single-page, COD-default, UPI-first) tuned for Tier-2 and Tier-3 Indian shoppers who abandon at the address step.",
      "Built a content production kit — lighting setup, shot list, size-chart template — so the StyleHub team could ship 50+ SKUs per week without external photographers.",
    ],
    solution: [
      "Custom Shopify 2.0 theme with Liquid + React islands, dynamic product variants, and a sticky 'Add to Cart' bar that lifts mobile conversion ~18%.",
      "Integrated Razorpay (UPI/cards/wallets), Cash on Delivery with OTP verification, and Shiprocket for pan-India 2-day fulfillment.",
      "Wired Meta Pixel, Google Tag Manager, GA4 enhanced ecommerce and a Klaviyo-style abandoned-cart flow (Email + WhatsApp via Interakt).",
      "Launched with 120 SKUs, 6 collection landing pages and SEO-rich product descriptions targeting 'ethnic wear Lucknow' and 18 long-tail variants.",
    ],
    results: [
      { metric: "Monthly online revenue", value: "₹2.1L+", detail: "Up from ₹25K pre-launch" },
      { metric: "Conversion rate", value: "3.4%", detail: "Industry benchmark for fashion: 1.4%" },
      { metric: "Cart abandonment", value: "-52%", detail: "88% → 42% after checkout redesign" },
      { metric: "Repeat customers", value: "31%", detail: "Within 60 days, fueled by WhatsApp flows" },
      { metric: "Meta ROAS", value: "5.8×", detail: "Tracked via Pixel + GA4 attribution" },
      { metric: "Average order value", value: "+38%", detail: "Driven by bundle upsells on PDP" },
    ],
    technologies: ["Shopify 2.0", "Liquid", "React", "Razorpay", "Shiprocket", "Interakt WhatsApp API", "Meta Pixel", "Google Tag Manager", "GA4", "Klaviyo"],
    testimonial: {
      quote: "We went from confused Instagram DMs to a real e-commerce business in under three months. The checkout just works — even on patchy 4G.",
      author: "Riya Kapoor",
      role: "Founder, StyleHub Fashion",
    },
  },
  {
    slug: "healthfirst-clinic-booking-platform",
    client: "HealthFirst Clinic",
    industry: "Healthcare",
    category: "Website + Booking System",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&fm=webp&auto=format",
    summary: "A multi-doctor clinic in Gomti Nagar replaced phone bookings with a 24/7 online appointment system — adding 250+ appointments per month.",
    duration: "5 weeks build · 4 months tracked",
    location: "Gomti Nagar, Lucknow",
    serviceSlug: "business-website-development",
    serviceName: "Business Website Development",
    relatedBlogSlugs: ["local-seo-lucknow-guide", "website-cost-india"],
    challenge: [
      "HealthFirst was losing an estimated 60+ appointments per week to busy phone lines, missed callbacks and a receptionist who couldn't keep up after 6 PM.",
      "Google Business Profile reviews mentioned 'never picks up the phone' six times in the trailing 90 days — actively damaging local ranking.",
      "No existing brand presence, no SEO footprint, and zero structured data — they didn't appear in the local-3-pack for any of their target specialties.",
    ],
    strategy: [
      "Built a doctor-led brand: each specialist got a personal bio page with credentials, photos and patient FAQs to boost EEAT and 'doctor name + Lucknow' rankings.",
      "Treated the booking system as the core conversion event — every page, ad and Google profile link routes to a single, frictionless flow.",
      "Aligned the site with Google's Medical YMYL guidelines: medical reviewer bylines, source citations, last-updated dates and a clear editorial policy.",
    ],
    solution: [
      "React + TypeScript site with a custom Supabase-backed booking module, real-time slot availability, WhatsApp + SMS confirmations and ICS calendar invites.",
      "Schema markup: LocalBusiness, MedicalClinic, Physician (per doctor), FAQ, Review and BreadcrumbList — all validated in Rich Results Test.",
      "Optimized Google Business Profile, added 20 geo-tagged photos, set up review-request automation via WhatsApp 24h post-visit.",
      "Wrote 18 SEO-first specialty pages (cardiology, pediatrics, gynaecology, etc.) targeting '<specialty> in Gomti Nagar' and '<specialty> doctor near me'.",
    ],
    results: [
      { metric: "Online appointments", value: "+250 / mo", detail: "From zero — now 38% of total bookings" },
      { metric: "Local 3-pack rankings", value: "Top 3", detail: "For 14 out of 18 target queries" },
      { metric: "Google reviews", value: "4.8 ★", detail: "From 3.6 ★ (62 → 214 reviews in 4 months)" },
      { metric: "No-show rate", value: "-41%", detail: "Thanks to automated WhatsApp reminders" },
      { metric: "Organic GBP calls", value: "+170%", detail: "Tracked via Google Business Profile insights" },
      { metric: "Page speed", value: "94 / 100", detail: "Mobile Lighthouse score" },
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "Twilio SMS", "WhatsApp Business API", "Google Business Profile API", "Schema.org JSON-LD"],
    testimonial: {
      quote: "Our front desk is finally free to care for patients in the clinic instead of fighting the phone. And we rank #1 for our specialties now.",
      author: "Dr. Neha Singh",
      role: "Medical Director, HealthFirst Clinic",
    },
  },
  {
    slug: "propertyhub-realty-lead-engine",
    client: "PropertyHub Realty",
    industry: "Real Estate",
    category: "Lead-Gen Website + SEO",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&fm=webp&auto=format",
    summary: "We turned a static listing site into a programmatic-SEO lead engine generating 320%+ more qualified leads for a Lucknow real-estate firm.",
    duration: "7 weeks build · 5 months tracked",
    location: "Lucknow & NCR",
    serviceSlug: "seo-services-lucknow",
    serviceName: "SEO Services in Lucknow",
    relatedBlogSlugs: ["local-seo-lucknow-guide", "schema-markup-guide"],
    challenge: [
      "PropertyHub had 400+ listings but only 12 indexed pages on Google. Each property page was a duplicated template with thin content, triggering Google's 'duplicate without canonical' filter.",
      "Lead capture relied on a single 'Enquire Now' form at the footer with no project-specific context — Sales had no idea which property a lead was asking about.",
      "Paid Google Ads were running at ₹420 cost-per-lead with a 1.1% conversion rate — burning ₹80K/month for ~190 leads of variable quality.",
    ],
    strategy: [
      "Built a programmatic-SEO architecture: <location> × <property-type> × <budget> templates auto-generating 2,400+ unique landing pages with real listing data.",
      "Layered inline lead capture into every listing — sticky form on desktop, slide-up modal on mobile, prefilled with property name and budget range.",
      "Reduced Ads spend by 35% and reinvested into local SEO + content. Target: bring organic share of leads from 18% → 60% in 6 months.",
    ],
    solution: [
      "React/Vite frontend with ISR-style static generation, pulling listings from a Supabase database refreshed nightly via a cron edge function.",
      "Per-page Schema: RealEstateListing, Product, BreadcrumbList, FAQPage — eligible for Google's property rich-result panel.",
      "Built a smart routing engine: leads auto-tagged by source (organic/ad/WhatsApp), assigned to the right agent via round-robin, and synced to Zoho CRM.",
      "Launched 22 SEO blog posts targeting '<area> property guides', 'rent vs buy Lucknow', 'best 2BHK Gomti Nagar' — each linking deep into matching listings.",
    ],
    results: [
      { metric: "Qualified leads", value: "+320%", detail: "190 → 798 per month" },
      { metric: "Indexed pages", value: "2,180", detail: "From 12 — programmatic templates" },
      { metric: "Cost per lead", value: "-58%", detail: "₹420 → ₹176 blended (ads + organic)" },
      { metric: "Organic share of leads", value: "64%", detail: "Up from 18% — beat the 60% target" },
      { metric: "Avg. session duration", value: "+212%", detail: "1m 04s → 3m 19s" },
      { metric: "Site Health Score", value: "96 / 100", detail: "Semrush technical audit" },
    ],
    technologies: ["React 18", "Vite", "TypeScript", "Supabase Edge Functions", "Tailwind CSS", "Zoho CRM API", "Mapbox", "Google Ads API", "Search Console", "Semrush"],
    testimonial: {
      quote: "We expected an SEO bump. We didn't expect to cut our paid-ad budget by a third and still triple our leads. Fahad is the real deal.",
      author: "Karan Mehta",
      role: "Director, PropertyHub Realty",
    },
  },
  {
    slug: "edulearn-academy-lms-platform",
    client: "EduLearn Academy",
    industry: "EdTech",
    category: "UI/UX + Custom LMS",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80&fm=webp&auto=format",
    summary: "We designed and shipped a custom learning platform that lifted student engagement 320% and tripled course signups for a Lucknow coaching brand.",
    duration: "10 weeks build · 5 months tracked",
    location: "Aliganj, Lucknow",
    serviceSlug: "web-design-services-lucknow",
    serviceName: "Web Design Services in Lucknow",
    relatedBlogSlugs: ["ui-ux-trends-2026", "website-redesign-checklist"],
    challenge: [
      "EduLearn was running coaching batches over WhatsApp + Google Drive. Drop-off after the first week was 64%, and instructors had no visibility into who actually watched a lesson.",
      "Course discovery happened entirely through word of mouth — zero organic search visibility, no landing pages for individual courses, and no upsell mechanism.",
      "The founder wanted a platform that 'felt like Notion meets Coursera' but had a ₹4L budget — well below typical custom-LMS quotes (₹15-25L).",
    ],
    strategy: [
      "Skipped over-engineered LMS frameworks. Built a focused MVP around three flows: enroll, learn, progress — leaving discussion forums and gamification for v2.",
      "Designed in Figma with a real student in the room every week. Ran 5-second tests, click-tests and 1:1 usability sessions before committing to dev.",
      "Used a usage-based architecture (Supabase + Bunny.net video CDN) so storage/bandwidth costs scale with revenue, not upfront capex.",
    ],
    solution: [
      "Custom React + Tailwind LMS: course catalog, video player with resume-where-you-left-off, quiz engine, certificate generator and instructor dashboard.",
      "Mobile-first design tested on entry-level Android (Redmi 9, 2GB RAM) — first contentful paint < 1.4s even on Slow 3G.",
      "Built an SEO surface: 28 indexable course landing pages, instructor bio pages, and a blog targeting '<exam> coaching in Lucknow' keywords.",
      "Integrated Razorpay subscriptions, EMI options, WhatsApp drip onboarding, and a referral-credit loop that drove 22% of new signups by month 3.",
    ],
    results: [
      { metric: "Student engagement", value: "+320%", detail: "Avg. lessons watched per student: 4.2 → 17.6" },
      { metric: "Course signups", value: "3.1×", detail: "From 84 → 261 paid enrollments per month" },
      { metric: "Week-1 retention", value: "78%", detail: "Up from 36% on WhatsApp/Drive" },
      { metric: "Revenue per student", value: "+47%", detail: "Driven by upsell into advanced batches" },
      { metric: "Referral signups", value: "22%", detail: "Share of new signups by month 3" },
      { metric: "Lighthouse mobile", value: "96 / 100", detail: "Performance + Accessibility" },
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "Bunny.net Video CDN", "Razorpay Subscriptions", "Resend (email)", "WhatsApp Business API", "Figma"],
    testimonial: {
      quote: "We got a Coursera-class platform on a coaching-class budget. Engagement metrics speak for themselves — students actually finish courses now.",
      author: "Pooja Sharma",
      role: "Founder, EduLearn Academy",
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
