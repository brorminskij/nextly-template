"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../../public/img/logo.jpg";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Top hero-like header */}
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white"
            >
              {t("about.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"
            >
              {t("about.subtitle")}
            </motion.p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/membership"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md"
              >
                {t("about.cta")}
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
              alt={t("about.imageAlt")}
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      {/* Content Section (uses hero color tokens) */}
      <Container>
        <div className="max-w-4xl mx-auto pb-28 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {t("about.missionTitle")}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              {t("about.missionText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {t("about.privateTitle")}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              {t("about.privateText")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              <strong className="text-gray-800 dark:text-white">{t("about.noteLabel")}</strong>
              {" "}{t("about.noteText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {t("about.experienceTitle")}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              {t("about.experienceText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {t("about.valuesTitle")}
            </h2>

            <ul className="space-y-3 pl-6 text-gray-600 dark:text-gray-300 list-disc text-lg">
              <li>
                <strong className="text-gray-800 dark:text-white">{t("about.values.respect.title")}</strong>
                {" — "}{t("about.values.respect.desc")}
              </li>
              <li>
                <strong className="text-gray-800 dark:text-white">{t("about.values.community.title")}</strong>
                {" — "}{t("about.values.community.desc")}
              </li>
              <li>
                <strong className="text-gray-800 dark:text-white">{t("about.values.wellbeing.title")}</strong>
                {" — "}{t("about.values.wellbeing.desc")}
              </li>
              <li>
                <strong className="text-gray-800 dark:text-white">{t("about.values.privacy.title")}</strong>
                {" — "}{t("about.values.privacy.desc")}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center pt-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {t("about.joinTitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
              {t("about.joinText")}
            </p>

            <a
              href="/membership"
              className="inline-block mt-6 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold rounded-xl transition"
            >
              {t("about.joinButton")}
            </a>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
