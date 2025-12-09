"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/TranslationProvider";

import { UserIcon } from "@heroicons/react/24/solid";

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
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={
              i === 0
                ? "lg:col-span-2 xl:col-auto"
                : ""
            }
          >
            <div
              className="
                flex flex-col justify-between w-full h-full 
                bg-gray-100 rounded-2xl py-14 px-8 
                text-center items-center
                lg:text-left lg:items-start
                dark:bg-trueGray-800
              "
            >
              <p className="text-2xl leading-normal">
                {item.text} <Mark>{item.mark}</Mark>
              </p>

              <Avatar image={item.image} name={item.name} title={item.title} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: string;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div
      className="
        flex items-center space-x-3 mt-8 
        justify-center 
        lg:justify-start
      "
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center dark:bg-gray-700">
        <UserIcon className="w-10 h-10 text-gray-600 dark:text-gray-300" />
      </div>

      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-emerald-800 bg-emerald-100 rounded-md ring-emerald-100 ring-4 dark:ring-emerald-900 dark:bg-emerald-900 dark:text-emerald-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
