"use client"; 
import Link from "next/link";
// Dark mode toggle removed — UI is now single-theme by default
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useTranslation } from "@/i18n/TranslationProvider";
import React, { useEffect, useRef, useState } from "react";

export const Navbar = () => {

  const { t, lang, setLang } = useTranslation();

  const navigation = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.membership"), href: "/membership" },
    { name: t("nav.rules"), href: "/rules" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">

        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-3">
            <Image
              src="/img/logo.jpg"
              width={32}
              height={32}
              alt="Logo"
              className="w-8 h-8"
            />
            <div className="leading-tight">
              <div className="text-lg font-semibold text-black">{t("nav.brand")}</div>
              <div className="text-xs uppercase text-gray-600">{t("nav.brandSub")}</div>
            </div>
          </span>
        </Link>

        {/* Right side: language dropdown with flags */}
        {/* <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item items-center">
            <LanguageDropdown lang={lang} setLang={setLang} t={t} />
          </div>
        </div> */}

        <Disclosure>
          {({ open }) => (
            <>
              {/* Mobile Menu Button */}
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-emerald-600 dark:text-gray-300 focus:text-emerald-600 focus:bg-emerald-100 dark:focus:bg-trueGray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Mobile Menu */}
              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-emerald-600 focus:text-emerald-600 focus:bg-emerald-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* mobile: language dropdown (simple list) */}
                {/* <div className="w-full px-4 py-2 mt-3">
                    <div className="flex flex-col">
                      <button aria-label={t("lang.en")} onClick={() => setLang("en")} className="text-left px-2 py-2 text-xl">🇬🇧</button>
                      <button aria-label={t("lang.es")} onClick={() => setLang("es")} className="text-left px-2 py-2 text-xl">🇪🇸</button>
                      <button aria-label={t("lang.fr")} onClick={() => setLang("fr")} className="text-left px-2 py-2 text-xl">🇫🇷</button>
                    </div>
                </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-emerald-600 focus:text-emerald-600 focus:bg-emerald-100 dark:focus:bg-gray-800 rounded-md"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
};

function FlagIcon({ code, size = 20 }: { code: string; size?: number }) {
  // Higher-fidelity inline SVG flags for consistent rendering.
  const common = { width: size, height: size };
  if (code === "en") {
    // More detailed Union Jack (simplified but more accurate composition)
    return (
      <svg {...common} viewBox="0 0 60 30" aria-hidden preserveAspectRatio="xMidYMid meet">
        <rect width="60" height="30" fill="#012169" />
        <g fill="#fff">
          <path d="M0 0 L60 30 L60 24 L6 0 Z" />
          <path d="M60 0 L0 30 L0 24 L54 0 Z" />
          <rect x="0" y="12" width="60" height="6" />
          <rect x="26" y="0" width="8" height="30" />
        </g>
        <g fill="#C8102E">
          <path d="M0 0 L60 30 L60 26 L4 0 Z" />
          <path d="M60 0 L0 30 L0 26 L56 0 Z" />
          <rect x="0" y="13.5" width="60" height="3" />
          <rect x="28" y="0" width="4" height="30" />
        </g>
      </svg>
    );
  }

  if (code === "es") {
    // Spain flag: red - yellow - red with a simplified emblem block on the hoist
    return (
      <svg {...common} viewBox="0 0 60 30" aria-hidden preserveAspectRatio="xMidYMid meet">
        <rect width="60" height="30" fill="#C60B1E" />
        <rect y="8" width="60" height="14" fill="#FFC400" />
        <g transform="translate(6,6) scale(0.6)">
          <rect x="0" y="0" width="6" height="18" fill="#8A1538" />
          <circle cx="3" cy="9" r="2" fill="#FFC400" />
        </g>
      </svg>
    );
  }

  if (code === "fr") {
    // France flag: blue - white - red vertical tricolor
    return (
      <svg {...common} viewBox="0 0 60 30" aria-hidden preserveAspectRatio="xMidYMid meet">
        <rect width="20" height="30" x="0" fill="#0055A4" />
        <rect width="20" height="30" x="20" fill="#FFFFFF" />
        <rect width="20" height="30" x="40" fill="#EF4135" />
      </svg>
    );
  }

  // Fallback neutral square
  return (
    <svg {...common} viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" fill="#E5E7EB" />
    </svg>
  );
}

function LanguageDropdown({ lang, setLang, t }: { lang: string; setLang: (l: string) => void; t: any }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center px-2 py-1 text-sm border rounded-md bg-white"
        aria-label={t(`lang.${lang}`)}
      >
        <FlagIcon code={lang} />
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div role="menu" className="absolute right-0 z-20 w-32 mt-2 bg-white border rounded-md shadow-lg">
          <button aria-label={t("lang.en")} className="w-full px-3 py-2 text-left hover:bg-gray-50" onClick={() => { setLang("en"); setOpen(false); }}>
            <FlagIcon code="en" />
          </button>
          <button aria-label={t("lang.es")} className="w-full px-3 py-2 text-left hover:bg-gray-50" onClick={() => { setLang("es"); setOpen(false); }}>
            <FlagIcon code="es" />
          </button>
          <button aria-label={t("lang.fr")} className="w-full px-3 py-2 text-left hover:bg-gray-50" onClick={() => { setLang("fr"); setOpen(false); }}>
            <FlagIcon code="fr" />
          </button>
        </div>
      )}
    </div>
  );
}