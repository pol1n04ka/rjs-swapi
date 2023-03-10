import styled from "styled-components";
import MenuCard from "../components/MenuCard";
import { Fragment } from "react";

import peopleImg from "../images/people.svg";
import filmsImg from "../images/films.svg";
import starshipsImg from "../images/starships.svg";
import vehiclesImg from "../images/vehicles.svg";
import speciesImg from "../images/species.svg";
import planetsImg from "../images/planets.svg";

const cards = [
  {
    id: 0,
    color: "#BFFFC6",
    shadow: "#65FF74",
    title: "People",
    img: { href: peopleImg, alt: "Luke Skywalker" },
    url: "/people",
  },
  {
    id: 1,
    color: "#EBBFFF",
    shadow: "#D987FF",
    title: "Films",
    img: { href: filmsImg, alt: "" },
    url: "/films",
  },
  {
    id: 2,
    color: "#BFFFFB",
    shadow: "#76FFF7",
    title: "Starships",
    img: { href: starshipsImg, alt: "" },
    url: "/starships",
  },
  {
    id: 3,
    color: "#FFBFBF",
    shadow: "#FF9797",
    title: "Vehicles",
    img: { href: vehiclesImg, alt: "" },
    url: "/vehicles",
  },
  {
    id: 4,
    color: "#BFD1FF",
    shadow: "#89AAFF",
    title: "Species",
    img: { href: speciesImg, alt: "" },
    url: "/species",
  },
  {
    id: 5,
    color: "#FFEDBF",
    shadow: "#FFDC82",
    title: "Planets",
    img: { href: planetsImg, alt: "" },
    url: "/planets",
  },
];

const MainPage = () => {
  const Heading = styled.h1`
    font-size: 2em;
    text-align: center;
  `;

  const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <Fragment>
      <Heading>Hi! It's my simple react app which using SWAPI</Heading>
      <CardsContainer>
        {cards.map((el) => {
          return (
            <MenuCard
              key={el.id}
              style={{ color: el.color, shadow: el.shadow }}
              img={{ alt: el.img.alt, href: el.img.href }}
              url={el.url}
              label={el.title}
            />
          );
        })}
      </CardsContainer>
    </Fragment>
  );
};

export default MainPage;
