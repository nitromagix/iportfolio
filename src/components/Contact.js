//

import contactData from "../models/contact";

import pencil from "../pencil.png";

function Contact(props) {
  return (
    <div className="module contact">
      <h3>
        <span>Contact</span>
        <img className="edit" src={pencil} alt="edit" />
      </h3>

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
