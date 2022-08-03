//

import TempProjectImage from "../test_project.jpg";

function PortfolioCard(props) {
  const data = props.data;

  return (
    <div>
      <h3>{data.name}</h3>
      <img src={TempProjectImage} alt={data.name} />
      <h4>Technology: {data.technology}</h4>
      <p>{data.description}</p>
    </div>
  );
}

export default PortfolioCard;
