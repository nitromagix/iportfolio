//

function PortfolioEditCardShow(props) {
  const projectData = props.projectData;
  const index = props.index;

  return (
    <div className="clearfix" id={`${index}_show`} style={{width:"100%"}}>
      <button
        id={`${index}edit`}
        onClick={props.editClick}
        style={{ float: "right", marginRight: "20px" }}
        itemID={index}
        data={index}
      >
        Edit
      </button>
      <ul style={{ textAlign: "left", cursor: "pointer" }}>
        {/* <li>{item._id}</li> */}
        <li key="0">
          <strong>Name:</strong> {projectData.name}
        </li>
        <li key="1">
          <strong>Description:</strong> {projectData.description}
        </li>
        <li key="2">
          <strong>Tech:</strong> {projectData.tech}
        </li>
        <li key="3">
          <strong>URL:</strong> {projectData.url}
        </li>
        <li key="4">
          <strong>Image URL:</strong> {projectData.imageUrl}
        </li>
      </ul>
      <br />
    </div>
  );
}

export default PortfolioEditCardShow;
