//

function AboutmeEdit(props) {
    const aboutmeData = props.aboutData;
    
    return (
      <div className="edit">
        <h1>About (edit)</h1>
        <hr/>
        <div className="editrow">
          <label htmlFor="about">About: </label><br/>
          <textarea
            type="text"
            id="about"
            defaultValue={aboutmeData.about}
            rows="3"
            cols="35"
          />
           </div>
      <div className="editrow">
        <label htmlFor="interests">Interests: </label><br/>
        <textarea
          type="text"
          id="interests"
          defaultValue={aboutmeData.interests}
          rows="3"
          cols="35"
        />
         </div>
      <div className="editrow">
        <label htmlFor="goals">Goals: </label><br/>
        <textarea
          type="text"
          id="goals"
          defaultValue={aboutmeData.goals}
          rows="3"
          cols="35"
        />
      </div>
        <hr/>
    </div>
    );
  }
  
  export default AboutmeEdit;