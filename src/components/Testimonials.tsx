"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/TranslationProvider";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";


const featurableWidgetId = "9db39393-addf-4e2a-b47b-3a78fd72c91b";

// Use public image paths instead of static imports
const userOneImg = "/img/sofiam.jpg";
const userTwoImg = "/img/user2.jpg";
const userThreeImg = "/img/user3.jpg";

export const Testimonials = () => {
  const { t } = useTranslation();
  const [remoteItems, setRemoteItems] = useState<null | Array<any>>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((j) => {
        if (!mounted) return;
        if (j?.reviews && Array.isArray(j.reviews) && j.reviews.length > 0) {
          setRemoteItems(j.reviews);
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const localeItems = [
    {
      text: t("testimonials.items.0.text"),
      mark: t("testimonials.items.0.mark"),
      image: userOneImg,
      name: t("testimonials.items.0.name"),
      title: t("testimonials.items.0.title"),
    },
    {
      text: t("testimonials.items.1.text"),
      mark: t("testimonials.items.1.mark"),
      image: userTwoImg,
      name: t("testimonials.items.1.name"),
      title: t("testimonials.items.1.title"),
    },
    {
      text: t("testimonials.items.2.text"),
      mark: t("testimonials.items.2.mark"),
      image: userThreeImg,
      name: t("testimonials.items.2.name"),
      title: t("testimonials.items.2.title"),
    },
  ];

  const items = remoteItems
    ? remoteItems.map((r, i) => ({
        text: r.text,
        mark: r.time ? `— ${r.time}` : "",
        image: i === 0 ? userOneImg : i === 1 ? userTwoImg : userThreeImg,
        name: r.author || `Reviewer ${i + 1}`,
        title: r.rating ? `${r.rating}★` : "",
      }))
    : localeItems;

  return (
      <ReactGoogleReviews carouselStyle={{padding: 0}} carouselBtnStyle={{display: "none"}} showDots={false} layout="carousel" featurableId={featurableWidgetId} />
  );
};