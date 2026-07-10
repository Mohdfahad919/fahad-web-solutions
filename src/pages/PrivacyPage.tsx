import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Fahad WebService"
        description="Privacy policy for Fahad WebService. Learn how we collect, use, and protect your personal information when you use our website development services."
        canonical="https://fahadwebservice.com/privacy"
      />
      <Header />
      <Breadcrumbs />
      <main className="w-full pt-28 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto prose-custom">
            <h1 className="text-foreground mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: June 2026</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Information We Collect</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">When you contact us via our website forms, WhatsApp, email or phone, we collect: your name, phone number, email address, business name, and project requirements. We use this information solely to respond to your inquiry and deliver our services.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Your information is used to: respond to inquiries, send project quotes, deliver agreed services, send invoices, and provide post-launch support. We never sell or share your data with third parties for marketing.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Data Storage & Security</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Form submissions are stored securely on encrypted servers. We use industry-standard SSL/TLS encryption for all data transmission. Access is restricted to authorized team members only.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Cookies & Analytics</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">We use Google Analytics to understand how visitors use our website. This data is anonymized and used solely to improve user experience. You can disable cookies in your browser at any time.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Your Rights</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">You can request access to, correction of, or deletion of your personal data at any time by emailing fahadshaikh9076669103@gmail.com. We will respond within 7 business days.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Contact Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">For any privacy-related questions, contact us at fahadshaikh9076669103@gmail.com or +91 9076669103.</p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
