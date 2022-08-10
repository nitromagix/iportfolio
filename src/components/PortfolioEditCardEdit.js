//

import { Fragment } from "react";

function PortfolioEditCardEdit(props) {
  const projectData = props.projectData;
  const index = props.index;

  return (
    <Fragment>
      <div
        className="edit"
        id={`${index}_edit`}
        style={{ textAlign: "left", display: "none", width: "100%" }}
      >
        <div id={`id-${index}`} style={{display:"none"}}>{projectData._id}</div>
        <button
          id={`${index}cancel`}
          onClick={props.cancelClick}
          style={{ marginRight: "20px", float: "right" }}
          itemID={index}
        >
          Cancel
        </button>
        <button
          id={`${index}save`}
          onClick={props.saveClick}
          style={{ marginRight: "20px", float: "right" }}
          itemID={index}
        >
          Save
        </button>
        <div className="editrow">
          <label htmlFor={`name-${index}`} className="verticaltop">
            <strong>Name: </strong>
          </label>
          <textarea
            id={`name-${index}`}
            name={`name-${index}`}
            defaultValue={projectData.name}
            rows="2"
            cols="20"
          ></textarea>
        </div>
        <div className="editrow">
          <label htmlFor={`description-${index}`} className="verticaltop">
            <strong>Description: </strong>
          </label>
          <textarea
            id={`description-${index}`}
            name={`description-${index}`}
            defaultValue={projectData.description}
            rows="2"
            cols="20"
          ></textarea>
        </div>
        <div className="editrow">
          <label htmlFor={`tech-${index}`} className="verticaltop">
            <strong>Tech: </strong>
          </label>
          <textarea
            id={`tech-${index}`}
            name={`tech-${index}`}
            defaultValue={projectData.tech}
            rows="2"
            cols="20"
          ></textarea>
        </div>
        <div className="editrow">
          <label htmlFor={`url-$index}`} className="verticaltop">
            <strong>URL: </strong>
          </label>
          <textarea
            id={`url-${index}`}
            name={`url-${index}`}
            defaultValue={projectData.url}
            rows="2"
            cols="20"
          ></textarea>
        </div>
        <div className="editrow">
          <label htmlFor={`imageUrl-${index}`} className="verticaltop">
            <strong>Image URL: </strong>
          </label>
          <textarea
            id={`imageUrl-${index}`}
            name={`imageUrl-${index}`}
            defaultValue={projectData.imageUrl}
            rows="2"
            cols="20"
          ></textarea>
        </div>
        <br />
        <br />
      </div>
    </Fragment>
  );
}

export default PortfolioEditCardEdit;
