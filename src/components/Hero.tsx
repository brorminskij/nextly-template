
"use client";
import Image from "next/image"; 
import { Container } from "@/components/Container";
import heroImg from "../../public/img/logo.jpg";
import { useTranslation } from "@/i18n/TranslationProvider";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {t("hero.title")}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="http://wa.me/34670682126"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                {t("hero.cta")}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt={t("hero.imageAlt")}
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
 <Container>
  <div className="flex flex-col justify-center">
    <div className="text-xl text-center text-gray-700 dark:text-white">
      {t("hero.trustedPrefix")} <span className="text-emerald-500">{t("hero.trustedCount")}</span> {t("hero.trustedSuffix")}
    </div>

    <div className="flex flex-wrap justify-center gap-10 mt-10 text-neutral-400 dark:text-neutral-400">
      <div className="flex flex-col items-center">
        <span className="text-3xl">🌿</span>
        <span>{t("hero.feature1")}</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl">🤝</span>
        <span>{t("hero.feature2")}</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl">🔒</span>
        <span>{t("hero.feature3")}</span>
      </div>
    </div>
  </div>
</Container>


    </>
  );
}


