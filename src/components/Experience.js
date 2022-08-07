//

// import { Fragment } from "react";
import EditModal from "./EditModal";
import ExperienceEdit from "./ExperienceEdit";

function Experience(props) {
  const modalSave = (e) => {};

  const temp = "";

  return (
    <div id="experience" className="module experience">
      <div>
        <h1>Experience</h1>
        <EditModal form={<ExperienceEdit experienceData={temp} />} onSave={modalSave} />
      </div>
    </div>
  );
}

export default Experience;
