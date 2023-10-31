// menuData.ts
export const menuData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Services",
    link: "/services",
    subMenu: [
      {
        label: "Service 1",
        link: "/service1",
      },
      {
        label: "Service 2",
        link: "/service2",
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
