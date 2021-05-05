import React from "react";
import { Link } from "react-router-dom";
import styles from "./leadMenu.module.css";

interface Props {}

type MENU_ITEM = {
  link: string;
  text: string;
  icon: string;
};

const MENU: MENU_ITEM[] = [
  {
    link: "/resource/hospital",
    icon: "fa-hospital",
    text: "Hospital",
  },

  {
    link: "/resource/medicines",
    icon: "fa-pills",
    text: "Medicines",
  },

  {
    link: "/resource/oxygen",
    icon: "fa-head-side-mask",
    text: "Oxygen",
  },

  {
    link: "/resource/plasma",
    icon: "fa-tint",
    text: "Plasma",
  },
  {
    link: "/resource/food",
    icon: "fa-hamburger",
    text: "Food",
  },
];

export default function LeadMenu({}: Props) {
  const MenuItem = ({ link, text, icon }: MENU_ITEM) => (
    <Link className="navbar-brand" to={link}>
      <i className={`fas ${icon}`}></i> {text}
    </Link>
  );

  return (
    <div id="leadMenu">
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
          {MENU.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </div>
      </nav>
    </div>
  );
}
