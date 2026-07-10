import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions | Fahad WebService"
        description="Terms and conditions for using Fahad WebService. Learn about our service agreements, payment terms, deliverables, and policies."
        canonical="https://fahadwebservice.com/terms"
      />
      <Header />
      <Breadcrumbs />
      <main className="w-full pt-28 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto prose-custom">
            <h1 className="text-foreground mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: June 2026</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Services</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Fahad WebService provides website design, development, e-commerce, SEO and maintenance services as described on our website. Specific deliverables, timelines and pricing are agreed in writing for each project.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Payment Terms</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Most projects require 50% advance and 50% upon delivery. Larger projects may use milestone-based payments. Monthly retainer services (SEO, maintenance) are billed monthly in advance. All prices are in INR and exclude applicable taxes.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Revisions & Approval</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Each package includes a specified number of revisions. Additional revisions are billed at standard rates. Final approval of design and content is the client's responsibility before launch.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Timelines</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Quoted timelines assume timely feedback from the client (typically within 48 hours). Delays in client feedback or content delivery may extend the project timeline.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Upon full payment, the client owns the website code, design assets, and content created specifically for their project. Third-party assets (fonts, stock images, plugins) remain under their respective licenses.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Refund Policy</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">If work has not yet begun, the advance is fully refundable. Once work has started, refunds are pro-rated based on work completed. No refunds after project delivery.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental or consequential damages.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Governing Law</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.</p>
            <h2 className="font-bold text-xl text-foreground mt-8 mb-3">Contact</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">For any questions about these terms, contact fahadshaikh9076669103@gmail.com or +91 9076669103.</p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
