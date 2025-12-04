import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/9076669103?text=Hi%20Fahad", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:bg-whatsapp-hover hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-foreground text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
      
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </button>
  );
}
