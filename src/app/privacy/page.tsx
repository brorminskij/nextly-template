"use client";
import React from "react";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="max-w-3xl py-20 mx-auto">
        <h1 className="text-3xl font-semibold text-emerald-600">{t("legal.privacyTitle")}</h1>
        <p className="mt-4 text-gray-600">{t("legal.privacyIntro")}</p>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("privacy.collectTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("privacy.collectText")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("privacy.useTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("privacy.useText")}</p>
          <p className="mt-2 font-semibold text-gray-700">{t("privacy.noSale")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("privacy.cookiesTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("privacy.cookiesText")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("privacy.rightsTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("privacy.rightsText", { email: "info@tranquility.example" })}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("privacy.securityTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("privacy.securityText")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("privacy.contactTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("legal.contact", { email: "info@tranquility.example" })}</p>
        </section>
      </div>
    </Container>
  );
}
