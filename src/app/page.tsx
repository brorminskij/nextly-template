"use client";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <Hero />

      <SectionTitle preTitle={t("home.preBenefits")} title={t("home.benefitsTitle")}>
        {t("home.benefitsIntro")}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* Video section removed per request */}

      <SectionTitle preTitle={t("home.testimonialsPre")} title={t("home.testimonialsTitle")}>
        {t("home.testimonialsIntro")}
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle={t("home.faqPre")} title={t("home.faqTitle")}>
        {t("home.faqIntro")}
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
