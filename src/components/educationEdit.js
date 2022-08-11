function EducationEdit(props) {
    const educationData = props.educationData;

    return (
        <div className="edit">
            <h1> Education (edit)</h1>
            <hr/>
            <div className="editrow">
                <label htmlFor="education">Education </label><br/>
                <input
                    type="text"
                    id="education"
                    defaultValue={educationData.education}
                /><br/><br/>
                <input
                    type="text"
                    id="education1"
                    defaultValue={educationData.education1}
                />
            </div><br/><br/>
            <div className="editrow">
                <label htmlFor="experience">Experience</label><br/>
                <textarea
                    type="text"
                    id="experience"
                    defaultValue={educationData.experience}
                    rows="3"
                    cols="35"
                    
                /><br/><br/>
                <textarea
                    type="text"
                    id="experience1"
                    defaultValue={educationData.experience1}
                    rows="3"
                    cols="35"
                />
            </div>
            <hr/>
        </div>
       );
    };

export default EducationEdit;