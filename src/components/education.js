import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal"
import EducationEdit from "./educationEdit"
import { getEducationData, setEducationData } from "../app/educationSlice"
import Stack from 'react-bootstrap/Stack';


function Education(props) {
    const educationData = useSelector(getEducationData);
    const dispatch = useDispatch();

        function modalSave(e) {
            const formData = e.target;

            dispatch(
                setEducationData({
                    education: formData.education.value,
                    education1: formData.education1.value,
                    experience: formData.experience.value,
                    experience1: formData.experience1.value,
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
                <header className=".App">Education </header>
                <Stack gap={0}>
                <p><span>{educationData.education}</span></p>
                <p><span>{educationData.education1}</span></p>
                </Stack>
            </div>
            <div>
                <header>Experience </header>
                <p><span>{educationData.experience}</span></p>
                <p><span>{educationData.experience1}</span></p>
            </div>
        </div>
    );
};


export default Education;