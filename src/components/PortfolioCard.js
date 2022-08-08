//

import TempProjectImage from "../test_project.jpg";

function PortfolioCard(props) {
  const data = props.data;
console.log(data.imageUrl)
  return (
    <div className="card">
      <h5>{data.name}</h5>
      <img
        src={
          data.imageUrl && (data.imageUrl !== "")
            ? data.imageUrl
            : TempProjectImage
        }
        alt={data.name}
      />
      <p>
        <strong>Tech</strong>: {data.tech}
      </p>
      <p>{data.description}</p>
    </div>
  );
}

export default PortfolioCard;
