"use client";
import React from "react";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function LegalPage() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="max-w-3xl py-20 mx-auto">
        <h1 className="text-3xl font-semibold text-emerald-600">{t("legal.legalTitle")}</h1>
        <p className="mt-4 text-gray-600">This Legal Notice governs your use of the Tranquility website. By using the site you accept these terms. If you do not agree, please do not use the website.</p>

        <section className="mt-8">
          <h2 className="text-xl font-medium">Intellectual Property</h2>
          <p className="mt-2 text-gray-600">All content on this site, including text, images and logos, is owned by Tranquility or used under license. You may view and print pages for personal, non-commercial use only.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">Governing Law</h2>
          <p className="mt-2 text-gray-600">These terms are governed by the laws of the jurisdiction where Tranquility operates. Any disputes will be resolved in the relevant courts, to the extent permitted by law.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">Third-Party Links</h2>
          <p className="mt-2 text-gray-600">Our site may include links to third-party websites. We are not responsible for their content or privacy practices. Linking does not imply endorsement.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">Changes</h2>
          <p className="mt-2 text-gray-600">We may update these legal notices and policies from time to time. Material changes will be posted on this site. Continued use after changes constitutes acceptance of the revised terms.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="mt-2 text-gray-600">{t("legal.contact", { email: "info@tranquility.example" })}</p>
        </section>
      </div>
    </Container>
  );
}
