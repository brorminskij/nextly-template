"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
// image removed per request
import { useTranslation } from "@/i18n/TranslationProvider";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Container className="flex flex-col items-center">
        <div className="w-full">
          <div className="max-w-2xl mb-8 text-center mx-auto">
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
      <Container>
          <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Tranquility+Social+Weed+Club&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tranquility Social Weed Club - Map"
            />

            <div className="p-4 flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-600 flex-shrink-0">
                <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
              </svg>

              <div>
                <p className="font-semibold text-gray-800">Tranquility Social Weed Club</p>
                <p className="text-sm text-gray-600">C. Río Subordán, 1, local 311-312, 29620 Torremolinos, Málaga, Spanien</p>
              </div>
            </div>
        </div>
      </Container>
        </div>
      </Container>
    </div>
  );
}
