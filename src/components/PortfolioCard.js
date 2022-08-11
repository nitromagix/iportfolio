//

import TempProjectImage from "../test_project.jpg";

function PortfolioCard(props) {
  const projectData = props.projectData;
  return (
    <div className="card">
      <h5>{projectData.name}</h5>
      <img
        src={
          projectData.imageUrl && projectData.imageUrl.trim() !== ""
            ? projectData.imageUrl
            : TempProjectImage
        }
        alt={projectData.name}
      />
      <div>
        <p>
          <strong>Tech</strong>: {projectData.tech}
        </p>
        <p>{projectData.description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
