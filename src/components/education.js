import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal"
import EducationEdit from "./educationEdit"
import { getEducationData, setEducationData } from "../app/educationSlice"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container>
            <div>
                <header>Education </header>
                <Row>
                <Col><p><span>{educationData.education}</span></p></Col>
                <Col><p><span>{educationData.education1}</span></p></Col>
                </Row>
            </div>
            <div>
                <header>Experience </header>
                <Row>
                <Col><p><span>{educationData.experience}</span></p></Col>
                <Col><p><span>{educationData.experience1}</span></p></Col>
                </Row>
            </div>
            </Container>
        </div>
    );
};


export default Education;