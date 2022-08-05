//
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditModal from "./EditModal";
import ContactEdit from "./ContactEdit";
import { getContactData, setContactData } from "../app/contactSlice";

// import contactData from "../models/contact";

function Contact(props) {
  const contactData = useSelector(getContactData);
  const dispatch = useDispatch();

  const [asdf, setAsdf] = useState(contactData);

  useEffect(() => {
    setAsdf(contactData);
  }, [contactData]);

  function modalSave(e) {
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const instagram = e.target.instagram.value;
    const facebook = e.target.facebook.value;
    const github = e.target.github.value;
    dispatch(setContactData({ email, phone, instagram, facebook, github }));
  }

  return (
    <div className="module contact">
      <h3>
        <span>Contact</span>
        <EditModal
          title="Contact (edit)"
          form={<ContactEdit />}
          onSave={modalSave}
        />
      </h3>

      <div>
        <span>Email: </span>
        <span>{asdf.email}</span>
      </div>
      <div>
        <span>Phone: </span>
        <span>{asdf.phone}</span>
      </div>
      <div>
        <span>Instagram: </span>
        <span>{asdf.instagram}</span>
      </div>
      <div>
        <span>Facebook: </span>
        <span>{asdf.facebook}</span>
      </div>
      <div>
        <span>Github: </span>
        <span>{asdf.github}</span>
      </div>
    </div>
  );
}

export default Contact;
