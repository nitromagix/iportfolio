//

import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";
import ContactEdit from "./ContactEdit";
import { getContactData, updateContactDataThunk } from "../app/contactSlice";

function Contact(props) {
  const contactData = useSelector(getContactData);
  const dispatch = useDispatch();

  function modalSave(e) {
    const formData = e.target;

    dispatch(
      updateContactDataThunk({
        email: formData.email.value,
        phone: formData.phone.value,
        instagram: formData.instagram.value,
        linkedin: formData.linkedin.value,
        github: formData.github.value,
      })
    );
  }

  return (
    <div id="contact" className="module contact">
      <div>
        <h1>Contact</h1>
        <EditModal form={<ContactEdit contactData={contactData}/>} onSave={modalSave} />
      </div>
      <div>
        <span>Email: </span>
        <span>{contactData.email}</span>
      </div>
      <div>
        <span>Phone: </span>
        <span>{contactData.phone}</span>
      </div>
      <div>
        <span>Instagram: </span>
        <span>{contactData.instagram}</span>
      </div>
      <div>
        <span>LinkedIn: </span>
        <span>{contactData.linkedin}</span>
      </div>
      <div>
        <span>Github: </span>
        <span>{contactData.github}</span>
      </div>
    </div>
  );
}

export default Contact;
