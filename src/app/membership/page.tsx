"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../../public/img/logo.jpg";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function Membership() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white"
            >
              {t("membership.title")} <span className="text-emerald-500">{t("membership.subtitle")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"
            >
              {t("membership.lead")}
            </motion.p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="http://wa.me/34670682126"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md"
              >
                {t("membership.requestButton")}
              </a>
              <a
                href="/rules"
                className="px-6 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md"
              >
                {t("membership.rulesButton")}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width={380}
              height={380}
              className="object-cover rounded-lg"
              alt={t("membership.imageAlt")}
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="max-w-4xl mx-auto pb-28 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {t("membership.howToApplyTitle")}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              {t("membership.howToApplyText")}
            </p>

            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-3 text-lg">
              <li>{t("membership.howToApply.list.0")}</li>
              <li>{t("membership.howToApply.list.1")}</li>
              <li>{t("membership.howToApply.list.2")}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {t("membership.benefitsTitle")}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              {t("membership.benefitsText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {t("membership.feesTitle")}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              {t("membership.feesText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center pt-8"
          >
            <a
              href="http://wa.me/34670682126"
              target="_blank"
              rel="noopener"
              className="inline-block mt-6 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold rounded-xl transition"
            >
              {t("membership.requestWhatsapp")}
            </a>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
