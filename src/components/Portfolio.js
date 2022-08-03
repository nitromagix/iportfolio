//

import { Fragment } from "react";

import PortfolioCard from './PortfolioCard';
import portfolioData from "../models/portfolio";

function Portfolio(props) {
  // const apiData = props.apiData;

  const createCards = () => {
    const cards = portfolioData.map((item, i) => (
      <PortfolioCard data={item} key={i} />
    ));

    return <Fragment>{cards}</Fragment>;
  };

  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <div>{createCards()}</div>
    </div>
  );
}

export default Portfolio;
