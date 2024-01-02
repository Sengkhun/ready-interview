import {
  faHouse,
  faBuilding,
  faCircleInfo,
  faBook,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

export const MENU = [
  { title: "Company", icon: faBuilding, path: "/company" },
  { title: "About Us", icon: faCircleInfo, path: "/about-us" },
  { title: "Blog", icon: faBook, path: "/blog" },
];

export const DRAWER_MENU = [
  { title: "Home", icon: faHouse, path: "/" },
  ...MENU,
];

export const DASHBOARD_LINK = {
  title: "Dashboard",
  icon: faGaugeHigh,
  path: "/dashboard",
};

export const ADMIN_MENU = [
  DASHBOARD_LINK,
  { title: "Blog", icon: faBook, path: `${DASHBOARD_LINK.path}/blog` },
];

export const ROLES = {
  admin: "admin",
  user: "user",
};

export default {
  name: "Ready Interview",
};
