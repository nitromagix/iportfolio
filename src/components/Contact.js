//

import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";
import ContactEdit from "./ContactEdit";
import { getContactData, setContactData } from "../app/contactSlice";

function Contact(props) {
  const contactData = useSelector(getContactData);
  const dispatch = useDispatch();

  function modalSave(e) {
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const instagram = e.target.instagram.value;
    const facebook = e.target.facebook.value;
    const github = e.target.github.value;
    dispatch(
      setContactData({
        email: email,
        phone: phone,
        instagram: instagram,
        facebook: facebook,
        github: github,
      })
    );
    console.log(contactData);
  }

  return (
    <div id="contact" className="module contact">
      <div>
        <h1>Contact</h1>
        <EditModal form={<ContactEdit />} onSave={modalSave} />
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
        <span>Facebook: </span>
        <span>{contactData.facebook}</span>
      </div>
      <div>
        <span>Github: </span>
        <span>{contactData.github}</span>
      </div>
    </div>
  );
}

export default Contact;
