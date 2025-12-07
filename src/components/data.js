import {
  SunIcon,
  LockClosedIcon,
  UserGroupIcon,
  SparklesIcon,
  CalendarDaysIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";

// Use public/static paths instead of imported image modules
// This allows swapping images without static imports.


const benefitOne = {
  titleKey: "benefits.one.title",
  descKey: "benefits.one.desc",
  image: "/img/waterfall.jpg",
  bullets: [
    {
      titleKey: "benefits.one.bullets.0.title",
      descKey: "benefits.one.bullets.0.desc",
      icon: <SparklesIcon />,
    },
    {
      titleKey: "benefits.one.bullets.1.title",
      descKey: "benefits.one.bullets.1.desc",
      icon: <CalendarDaysIcon />,
    },
    {
      titleKey: "benefits.one.bullets.2.title",
      descKey: "benefits.one.bullets.2.desc",
      icon: <UserGroupIcon />,
    },
  ],
};

const benefitTwo = {
  titleKey: "benefits.two.title",
  descKey: "benefits.two.desc",
  image: "/img/sloths.jpeg",
  bullets: [
    {
      titleKey: "benefits.two.bullets.0.title",
      descKey: "benefits.two.bullets.0.desc",
      icon: <LockClosedIcon />,
    },
    {
      titleKey: "benefits.two.bullets.1.title",
      descKey: "benefits.two.bullets.1.desc",
      icon: <ShieldCheckIcon />,
    },
    {
      titleKey: "benefits.two.bullets.2.title",
      descKey: "benefits.two.bullets.2.desc",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
