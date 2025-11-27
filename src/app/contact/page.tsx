"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import Image from "next/image";
import heroImg from "../../../public/img/logo.jpg";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function Contact() {
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
              className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight"
            >
              {t("contact.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width={380}
              height={380}
              className="object-cover rounded-lg"
              alt={t("contact.imageAlt")}
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="max-w-3xl mx-auto pb-28">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block mb-2 text-sm text-gray-600">{t("contact.form.name.label")}</label>
              <input className="w-full px-4 py-3 border rounded-md" type="text" placeholder={t("contact.form.name.placeholder")} />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">{t("contact.form.email.label")}</label>
              <input className="w-full px-4 py-3 border rounded-md" type="email" placeholder={t("contact.form.email.placeholder")} />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">{t("contact.form.message.label")}</label>
              <textarea className="w-full px-4 py-3 border rounded-md" rows={6} placeholder={t("contact.form.message.placeholder")} />
            </div>

            <div className="text-center">
              <button className="inline-block mt-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold rounded-xl transition">
                {t("contact.form.submit")}
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </div>
  );
}
