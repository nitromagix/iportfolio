import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal"
import EducationEdit from "./educationEdit"
import { getEducationData, setEducationData } from "../app/educationSlice"

function Education(props) {
    const educationData = useSelector(getEducationData);
    const dispatch = useDispatch();

        function modalSave(e) {
            const formData = e.target;

            dispatch(
                setEducationData({
                    education: formData.education.value,
                    experience: formData.experience.value
                })
            );
        };

    return (
        <div id="education" className='module education'>
            <div>
            <h1> Qualification</h1>
        <EditModal form={<EducationEdit educationData={educationData}/>} onSave={modalSave} />
            </div>
            <div>
                <header>Education </header>
                <p><span>{educationData.education}</span></p>
            </div>
            <div>
                <header>Experience </header>
                <p><span>{educationData.experience}</span></p>
            </div>
        </div>
    );
};


export default Education;