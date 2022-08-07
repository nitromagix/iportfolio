//

function ContactEdit(props) {
  const contactData = props.contactData;
  
  return (
    <div className="edit">
      <h1>Contact (edit)</h1>
      <hr/>
      <div className="editrow">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={contactData.email}
        />
      </div>
      <div className="editrow">
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          name="phone"
          id="phone"
          defaultValue={contactData.phone}
        />
      </div>
      <div className="editrow">
        <label htmlFor="instagram">Instagram: </label>
        <input
          type="text"
          name="instagram"
          id="instagram"
          defaultValue={contactData.instagram}
        />
      </div>
      <div className="editrow">
        <label htmlFor="linkedin">LinkedIn: </label>
        <input
          type="text"
          name="linkedin"
          id="facelinkedinbook"
          defaultValue={contactData.linkedin}
        />
      </div>
      <div className="editrow">
        <label htmlFor="github">Github: </label>
        <input
          type="text"
          name="github"
          id="github"
          defaultValue={contactData.github}
        />
      </div>
      <hr/>
    </div>
  );
}

export default ContactEdit;
