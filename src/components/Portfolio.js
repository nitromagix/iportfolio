//

import { Fragment } from "react";

import PortfolioCard from "./PortfolioCard";
import EditModal from "./EditModal";
import PortfolioEdit from "./PortfolioEdit";
import portfolioData from "../models/portfolio";

function Portfolio(props) {
  // const apiData = props.apiData;

  const createCards = () => {
    const cards = portfolioData.map((item, i) => (
      <PortfolioCard data={item} key={i} />
    ));

    return <Fragment>{cards}</Fragment>;
  };

  const modalSave = () => {};

  return (
    <div id="portfolio" className="module portfolio">
      <div>
        <h1>Portfolio</h1>
        <EditModal form={<PortfolioEdit />} onSave={modalSave} />
      </div>
      <div className="cards">{createCards()}</div>
    </div>
  );
}

export default Portfolio;
