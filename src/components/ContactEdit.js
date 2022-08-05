//

import { Fragment } from "react";

function ContactEdit(props) {
  return (
    <div className="edit">
      <div className="editrow">
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" defaultValue={"email"} />
      </div>
      <div className="editrow">
        <label htmlFor="phone">Phone: </label>
        <input type="text" name="phone" id="phone" defaultValue={"phone"} />
      </div>
      <div className="editrow">
        <label htmlFor="instagram">Instagram: </label>
        <input
          type="text"
          name="instagram"
          id="instagram"
          defaultValue={"instagram"}
        />
      </div>
      <div className="editrow">
        <label htmlFor="facebook">Facebook: </label>
        <input
          type="text"
          name="facebook"
          id="facebook"
          defaultValue={"facebook"}
        />
      </div>
      <div className="editrow">
        <label htmlFor="github">Github: </label>
        <input type="text" name="github" id="github" defaultValue={"github"} />
      </div>
      <div className="editrow">
        
      </div>
    </div>
  );
}

export default ContactEdit;
