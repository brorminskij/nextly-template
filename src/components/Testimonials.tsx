"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/TranslationProvider";

// Use public image paths instead of static imports (avoids blurDataURL issues)
const userOneImg = "/img/user1.jpg";
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
      .catch(() => {
        // ignore and fallback to local strings
      });
    return () => {
      mounted = false;
    };
  }, []);

  const localeItems = [
    { text: t("testimonials.items.0.text"), mark: t("testimonials.items.0.mark"), image: userOneImg, name: t("testimonials.items.0.name"), title: t("testimonials.items.0.title") },
    { text: t("testimonials.items.1.text"), mark: t("testimonials.items.1.mark"), image: userTwoImg, name: t("testimonials.items.1.name"), title: t("testimonials.items.1.title") },
    { text: t("testimonials.items.2.text"), mark: t("testimonials.items.2.mark"), image: userThreeImg, name: t("testimonials.items.2.name"), title: t("testimonials.items.2.title") },
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
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              {items[0].text} <Mark>{items[0].mark}</Mark>
            </p>

            <Avatar image={items[0].image} name={items[0].name} title={items[0].title} />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              {items[1].text} <Mark>{items[1].mark}</Mark>
            </p>

            <Avatar image={items[1].image} name={items[1].name} title={items[1].title} />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              {items[2].text} <Mark>{items[2].mark}</Mark>
            </p>

            <Avatar image={items[2].image} name={items[2].name} title={items[2].title} />
          </div>
        </div>
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
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width={40}
          height={40}
          alt="Avatar"
        />
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
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
