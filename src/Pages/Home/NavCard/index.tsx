import React, { ReactElement } from "react";
import { NavLink as Link } from "react-router-dom";
import Container from "../../../Components/Container";
import { ResourceType } from "../../../firebase/utils";
import styles from "./navCard.module.css";

const NavCard = ({ link, text }: { link: string; text: string }) => (
  <Link
    style={{
      textDecoration: "none",
      margin: "10px",
    }}
    activeClassName="border border-primary border-2 rounded"
    to={`/resource/${link}`}
  >
    <div className={[styles.card, "card"].join(" ")}>
      <div className={[styles.cardBody, "card-body"].join(" ")}>{text}</div>
    </div>
  </Link>
);

interface Props {}

type card = {
  text: ResourceType | "All";
  link: string;
};
const CARDS: card[] = [
  {
    text: "All",
    link: "/",
  },
  {
    text: "Oxygen",
    link: "oxygen",
  },
  {
    text: "Hospital",
    link: "hospital",
  },
  {
    text: "Medicines",
    link: "medicines",
  },
  {
    text: "Plasma",
    link: "plasma",
  },
  {
    text: "Food",
    link: "food",
  },
];

function NavCards({}: Props): ReactElement {
  return (
    <Container>
      {CARDS.map((card, index) => (
        <NavCard {...card} key={index} />
      ))}
    </Container>
  );
}

export default NavCards;
