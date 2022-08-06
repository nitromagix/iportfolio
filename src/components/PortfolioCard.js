//

import TempProjectImage from "../test_project.jpg";

function PortfolioCard(props) {
  const data = props.data;

  return (
    <div className="card">
      <h5>{data.name}</h5>
      <img src={TempProjectImage} alt={data.name} />
      <p><strong>Tech:</strong>: {data.technology}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default PortfolioCard;
