import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const url = "https://wa.me/9076669103";
    window.location.href = url;
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-[0_8px_24px_-4px_hsl(var(--whatsapp)/0.5)] hover:bg-whatsapp-hover hover:scale-110 hover:shadow-[0_12px_32px_-4px_hsl(var(--whatsapp)/0.6)] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-card text-foreground text-sm font-semibold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
      
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25" />
    </button>
  );
}
