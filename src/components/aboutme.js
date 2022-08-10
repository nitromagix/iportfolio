import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";
import AboutmeEdit from "./aboutmeEdit";
import { getAboutData, setAboutData } from "../app/aboutSlice"

function About(props) {
  const aboutmeData = useSelector(getAboutData);
  const dispatch = useDispatch();

    function modalSave(e) {
      const formData = e.target;

      dispatch(
        setAboutData({
          about: formData.about.value,
          interests: formData.interests.value,
          goals: formData.goals.value
        })
      );
    }
  
  return (
    <div id="aboutme" className='module about'>
        <EditModal form={<AboutmeEdit aboutData={aboutmeData}/>} onSave={modalSave} />
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About Me</Accordion.Header>
        <Accordion.Body>
                <p><span>{aboutmeData.about}</span></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Interests</Accordion.Header>
        <Accordion.Body>       
                <p><span>{aboutmeData.interests}</span></p>                
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Goals</Accordion.Header>
        <Accordion.Body>      
                <p><span>{aboutmeData.goals}</span></p>               
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default About;