"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
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

       {/* ---------- Contact Info Before Form ---------- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-10"
>
  <div className="text-center space-y-4">
    <p className="text-lg font-semibold text-gray-800">
      Tranquility Social Club
    </p>

    {/* Phone */}
    <div className="flex justify-center items-center gap-2 text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-emerald-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.424-1.106a1.125 1.125 0 00-1.173.417l-.867 1.086c-.327.41-.895.57-1.396.38a12.035 12.035 0 01-7.143-7.143c-.19-.501-.03-1.07.38-1.396l1.086-.867a1.125 1.125 0 00.417-1.173L5.962 3.602A1.125 1.125 0 004.872 2.75H3.75A1.5 1.5 0 002.25 4.25v2.5z"
        />
      </svg>

      <a
        href="tel:+34670682126"
        className="hover:text-emerald-600 transition"
      >
        +34 670 682 126
      </a>
    </div>

    {/* Email */}
    <div className="flex justify-center items-center gap-2 text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-emerald-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.068 1.916l-7.5 4.5a2.25 2.25 0 01-2.364 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
        />
      </svg>

      <a
        href="mailto:asociacion.tq@gmail.com"
        className="hover:text-emerald-600 transition"
      >
        asociacion.tq@gmail.com
      </a>
    </div>
  </div>

  {/* ---------- Opening Hours Block ---------- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-10"
>
  <div className="text-center space-y-4">
    <p className="text-lg font-semibold text-gray-800 space-y-4">
    Opening Hours
  </p>

  <div className="space-y-1 text-gray-700">
    <p>Monday – Thursday: <span className="font-medium text-gray-900">12:00 – 00:00</span></p>
    <p>Friday – Saturday: <span className="font-medium text-gray-900">12:00 – 00:00</span></p>
    <p>Sunday: <span className="font-medium text-gray-900">12:00 – 00:00</span></p>
  </div>
  </div>

  {/* Optional subtle divider */}
  <div className="pt-4">
    <div className="w-20 mx-auto border-t border-gray-200"></div>
  </div>
</motion.div>

  {/* Divider */}
  <div className="my-8 border-t border-gray-200"></div>
</motion.div>
          {/* ---------- Form ---------- */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                {t("contact.form.name.label")}
              </label>
              <input
                className="w-full px-4 py-3 border rounded-md"
                type="text"
                placeholder={t("contact.form.name.placeholder")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                {t("contact.form.email.label")}
              </label>
              <input
                className="w-full px-4 py-3 border rounded-md"
                type="email"
                placeholder={t("contact.form.email.placeholder")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                {t("contact.form.message.label")}
              </label>
              <textarea
                className="w-full px-4 py-3 border rounded-md"
                rows={6}
                placeholder={t("contact.form.message.placeholder")}
              />
            </div>

            <div className="text-center">
              <button className="inline-block mt-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-semibold rounded-xl transition">
                {t("contact.form.submit")}
              </button>
            </div>
          </motion.form>

          {/* ---------- Map ---------- */}
          <Container>
            <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden mt-16">
              <iframe
                src="https://www.google.com/maps?q=Tranquility+Social+Weed+Club&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tranquility Social Weed Club - Map"
              />

              <div className="p-4 flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-emerald-600 flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>
                  <p className="font-semibold text-gray-800">
                    Tranquility Social Weed Club
                  </p>
                  <p className="text-sm text-gray-600">
                    C. Río Subordán, 1, local 311–312,
                    29620 Torremolinos, Málaga, Spanien
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}
