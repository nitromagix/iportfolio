//

function AboutmeEdit(props) {
    const aboutmeData = props.aboutData;
    
    return (
      <div className="edit">
        <h1>About (edit)</h1>
        <hr/>
        <div className="editrow">
          <label htmlFor="about">About </label>
          <input
            type="text"
            id="about"
            defaultValue={aboutmeData.about}
          />
           </div>
      <div className="editrow">
        <label htmlFor="interests">Interests </label>
        <input
          type="text"
          id="interests"
          defaultValue={aboutmeData.interests}
        />
         </div>
      <div className="editrow">
        <label htmlFor="goals">Goals </label>
        <input
          type="text"
          id="goals"
          defaultValue={aboutmeData.goals}
        />
      </div>
        <hr/>
    </div>
    );
  }
  
  export default AboutmeEdit;