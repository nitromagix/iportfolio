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
                });
            );
        };

    return (
        
    )
}


export default Education;