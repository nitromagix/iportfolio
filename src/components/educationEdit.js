function EducationEdit(props) {
    const educationData = props.educationData;

    return (
        <div className="edit">
            <h1> Education (edit)</h1>
            <hr/>
            <div className="editrow">
                <label htmlFor="education">Education </label>
                <input
                    type="text"
                    id="education"
                    defaultValue={educationData.education}
                />
                <input
                    type="text"
                    id="education1"
                    defaultValue={educationData.education1}
                />
            </div>
            <div className="editrow">
                <label htmlFor="experience">Experience</label>
                <input
                    type="text"
                    id="experience"
                    defaultValue={educationData.experience}
                />
                <input
                    type="text"
                    id="experience1"
                    defaultValue={educationData.experience1}
                />
            </div>
            <hr/>
        </div>
       );
    };

export default EducationEdit;