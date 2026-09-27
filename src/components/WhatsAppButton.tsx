import { MessageCircle, Phone } from "lucide-react";

export function WhatsAppButton() {
  return (
    <>
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-2 sm:hidden">
        <a
          href="tel:9076669103"
          aria-label="Call Fahad WebService"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-colors hover:bg-accent-hover"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/9076669103"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-colors hover:bg-whatsapp-hover"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      <a
        href="https://wa.me/9076669103"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 hidden sm:flex"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-all duration-300 hover:bg-whatsapp-hover hover:scale-105">
          <MessageCircle className="h-6 w-6" />
        </span>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </>
  );
}
