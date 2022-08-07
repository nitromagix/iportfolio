//

import React, { useState } from "react";
import Modal from "react-modal";
import pencil from "../file_edit.png";

Modal.setAppElement("#root");

const customStyles = {
  // top: "40%",
  // left: "auto",
  // right: "auto",
  // bottom: "auto",
  margin: "0 auto",
  // marginRight: "-50%",
  // width:"100%",
  transform: "translate(0%, 0%)",
  minWidth: "300px",
  maxWidth: "500px",
  minHeight: "400px",
  height:"70vh"
};

function EditModal(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function modalSubmit(e) {
    e.preventDefault();
    closeModal();
    props.onSave(e);
  }

  return (
    <div className="editmodalicon clearfix">
      <img src={pencil} alt="edit" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.5)",
          },

          content: {
            ...customStyles,
            boxShadow:
              "inset 0 0em 3em rgba(0,0,0,0.1), 0 0  0 0px rgb(255,255,255), 0em 0em 0.3em rgba(0,0,0,0.4)",
            borderRadius: 4,
          },
        }}
        contentLabel="Edit Modal"
      >
        <div>
          <form onSubmit={modalSubmit}>
            {props.form}
            <div className="textcenter">
              <button type="submit">Save</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditModal;
