"use client";

import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

export function WhatsAppButton() {
  const phone = contactInfo.whatsapp.replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${contactInfo.whatsapp}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="hidden md:inline">{contactInfo.whatsapp}</span>
    </a>
  );
}
