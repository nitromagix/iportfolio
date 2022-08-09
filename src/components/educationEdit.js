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
            </div>
            <div className="editrow">
                <label htmlFor="experience">Experience</label>
                <input
                    type="text"
                    id="education"
                    defaultValue={educationData.experience}
                />
            </div>
            <hr/>
        </div>
       );
    };

export default EducationEdit;