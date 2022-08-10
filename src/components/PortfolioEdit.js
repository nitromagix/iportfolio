//

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import PortfolioEditCardEdit from "./PortfolioEditCardEdit";
import PortfolioEditCardShow from "./PortfolioEditCardShow";
import { getPortfolioData, updatePortfolioDataThunk } from "../app/portfolioSlice";

function PortfolioEdit(props) {
  const dispatch = useDispatch();
  const portfolioData = props.portfolioData;

  const editClick = (e) => {
    e.preventDefault();
    const index = e.target.id;
    showEdit(index, true);
  };
  const cancelClick = (e) => {
    e.preventDefault();
    const index = e.target.id;
    showEdit(index, false);
  };
  const saveClick = (e) => {
    e.preventDefault();
    const index = e.target.id;
    const updatedProject = {
      _id: document.getElementById(`id-${index}`).value
    }
    console.log(updatedProject);
    dispatch(updatePortfolioDataThunk(updatedProject));

    showEdit(index, false);
  };

  const showEdit = (index, show) => {
    document.getElementById(`${index}_edit`).style.display = show
      ? "table"
      : "none";
    document.getElementById(`${index}_show`).style.display = show
      ? "none"
      : "table";
  };

  const projects = portfolioData.map((project, i) => (
    <li key={i}>
      <PortfolioEditCardShow
        projectData={project}
        index={i}
        editClick={editClick}
        display="table"
        key={`${i}_show`}
      />
      <PortfolioEditCardEdit
        projectData={project}
        index={i}
        cancelClick={cancelClick}
        saveClick={saveClick}
        display="none"
        key={`${i}_edit`}
      />
    </li>
  ));

  return (
    <div className="edit">
      <h1>Portfolio (edit)</h1>
      <hr />
      <ul style={{ maxHeight: "500px", overflow: "scroll" }}>{projects}</ul>
      <hr />
    </div>
  );
}

export default PortfolioEdit;
