"use client";
import React from "react";
import { useTranslation } from "@/i18n/TranslationProvider";

// Use the same WhatsApp number as the Request Membership buttons.
const WHATSAPP_URL = "https://wa.me/34670682126";

export function PopupWidget() {
  const { t } = useTranslation();

  return (
    <div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 flex items-center justify-center transition duration-300 bg-emerald-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-emerald-600 focus:bg-emerald-600"
        aria-label={t("widget.openAria")}
      >
        <span className="sr-only">{t("widget.openAria")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
          <path fill="currentColor" d="M20.52 3.48A11.887 11.887 0 0012 .5C5.94.5.98 4.9.07 10.5a11.98 11.98 0 001.64 8.01L.5 24l5.61-1.46A11.93 11.93 0 0012 23.5c6.06 0 11.02-4.4 11.93-10.01.5-2.99-.28-5.93-3.41-9.01zM12 21.5c-1.36 0-2.7-.36-3.86-1.03l-.28-.17-3.34.87.89-3.25-.18-.31A8.964 8.964 0 013 10.5C3.97 6.03 7.72 3 12 3c2.14 0 3.92.73 5.22 2.06 1.9 1.98 2.34 4.25 1.86 6.48-.66 3.95-4.41 7.96-7.08 9.96-1.03.84-2.21 1.45-3.2 1.45z" />
          <path fill="#fff" d="M17.6 14.28c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.8.97-.98 1.17-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.41-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.02-.53-.02-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51l-.55-.01c-.18 0-.47.07-.72.34-.25.28-.97.95-.97 2.32 0 1.37.99 2.69 1.13 2.88.14.2 1.95 2.98 4.72 4.18 3.23 1.4 3.23 0 3.8-.41.56-.41 1.78-1.55 2.03-1.86.25-.31.25-.58.18-.64-.07-.06-.27-.1-.57-.25z" />
        </svg>
      </a>
    </div>
  );
}
