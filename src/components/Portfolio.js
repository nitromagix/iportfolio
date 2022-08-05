//

import { Fragment } from "react";

import PortfolioCard from "./PortfolioCard";
import portfolioData from "../models/portfolio";
import pencil from "../pencil.png";

function Portfolio(props) {
  // const apiData = props.apiData;

  const createCards = () => {
    const cards = portfolioData.map((item, i) => (
      <PortfolioCard data={item} key={i} />
    ));

    return <Fragment>{cards}</Fragment>;
  };

  return (
    <div className="module portfolio">
      <h3>
        <span>Portfolio</span>
        <img className="edit" src={pencil} alt="edit" />
      </h3>
      <div>{createCards()}</div>
    </div>
  );
}

export default Portfolio;
