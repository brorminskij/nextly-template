import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

// Use public/static paths instead of imported image modules
// This allows swapping images without static imports.


const benefitOne = {
  titleKey: "benefits.one.title",
  descKey: "benefits.one.desc",
  image: "/img/hero.png",
  bullets: [
    {
      titleKey: "benefits.one.bullets.0.title",
      descKey: "benefits.one.bullets.0.desc",
      icon: <FaceSmileIcon />,
    },
    {
      titleKey: "benefits.one.bullets.1.title",
      descKey: "benefits.one.bullets.1.desc",
      icon: <ChartBarSquareIcon />,
    },
    {
      titleKey: "benefits.one.bullets.2.title",
      descKey: "benefits.one.bullets.2.desc",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  titleKey: "benefits.two.title",
  descKey: "benefits.two.desc",
  image: "/img/logo.jpg",
  bullets: [
    {
      titleKey: "benefits.two.bullets.0.title",
      descKey: "benefits.two.bullets.0.desc",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      titleKey: "benefits.two.bullets.1.title",
      descKey: "benefits.two.bullets.1.desc",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      titleKey: "benefits.two.bullets.2.title",
      descKey: "benefits.two.bullets.2.desc",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
