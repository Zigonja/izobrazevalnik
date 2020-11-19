/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Fizika from "views/Fizika.js";

var routes = [
  {
    path: "/dashboard",
    name: "Profil",
    icon: "tim-icons icon-badge",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Gimnazija (1. Letnik)",
    icon: "tim-icons icon-puzzle-10",
    component: Notifications,
    layout: "/admin",
    hidden: true

  },
  {
    path: "/snov",
    name: "Snov",
    icon: "tim-icons icon-notes",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/predmeti",
    name: "Gimnazija (1. Letnik)",
    icon: "tim-icons icon-bank",
    component: Notifications,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/tables",
    name: "Poišči pomoč",
    icon: "tim-icons icon-zoom-split",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Inštrukcije",
    icon: "tim-icons icon-chat-33",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/fizika",
    name: "Gimnazija (1. Letnik) Fizika",
    icon: "tim-icons icon-chat-33",
    component: Fizika,
    layout: "/admin",
    hidden: true
  }
];
export default routes;
