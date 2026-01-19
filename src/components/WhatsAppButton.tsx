import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.location.href = "https://wa.me/9076669103";
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
      
      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-hover transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-foreground text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </button>
  );
}
