"use client";
import React from "react";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function TermsPage() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="max-w-3xl py-20 mx-auto">
        <h1 className="text-3xl font-semibold text-emerald-600">{t("legal.termsTitle")}</h1>
        <p className="mt-4 text-gray-600">{t("legal.termsIntro")}</p>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("legal.using.title")}</h2>
          <p className="mt-2 text-gray-600">{t("legal.using.text")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("legal.noSale.title")}</h2>
          <p className="mt-2 text-gray-600">{t("legal.noSale.text")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("legal.liability.title")}</h2>
          <p className="mt-2 text-gray-600">{t("legal.liability.text")}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">{t("legal.contactTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("legal.contact", { email: "asociacion.tq@gmail.com" })}</p>
        </section>
      </div>
    </Container>
  );
}
