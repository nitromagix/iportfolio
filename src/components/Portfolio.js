//

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioCard from "./PortfolioCard";
import EditModal from "./EditModal";
import PortfolioEdit from "./PortfolioEdit";
// import portfolioData from "../models/portfolio";

import { getPortfolioData, setPortfolioData } from "../app/portfolioSlice";

function Portfolio(props) {
  const portfolioData = useSelector(getPortfolioData);
  const dispatch = useDispatch();

  const createCards = () => {

    console.log(portfolioData)
    const cards = portfolioData.map((item, i) => (
      <PortfolioCard data={item} key={i} />
    ));

    return <Fragment>{cards}</Fragment>;
  };

  const modalSave = (e) => {};

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
