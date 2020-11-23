import Instrukcije from "views/Instrukcije.js";
import Snov from "views/Snov.js";
import GimnazijaPrvi from "views/Gimnazija.js";
import Pomoc  from "views/Pomoc.js";
import Profil from "views/Profil.js";
import Fizika from "views/Fizika.js";
import Konferenca from "views/Konferenca";

var routes = [
  {
    path: "/profil",
    name: "Profil",
    icon: "tim-icons icon-badge",
    component: Profil,
    layout: "/admin"
  },
  {
    path: "/snov",
    name: "Snov",
    icon: "tim-icons icon-notes",
    component: Snov,
    layout: "/admin"
  },
  {
    path: "/gim-prvi-letnik",
    name: "Gimnazija (1. Letnik)",
    icon: "tim-icons icon-bank",
    component: GimnazijaPrvi,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/pomoc",
    name: "Poišči pomoč",
    icon: "tim-icons icon-zoom-split",
    component: Pomoc,
    layout: "/admin"
  },
  {
    path: "/instrukcije",
    name: "Inštrukcije",
    icon: "tim-icons icon-chat-33",
    component: Instrukcije,
    layout: "/admin"
  },
  {
    path: "/fizika",
    name: "Gimnazija (1. Letnik) Fizika",
    icon: "tim-icons icon-chat-33",
    component: Fizika,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/konferenca",
    name: "Konferenca",
    icon: "tim-icons icon-chat-33",
    component: Konferenca,
    layout: "/admin",
    hidden: true
  }
];
export default routes;
