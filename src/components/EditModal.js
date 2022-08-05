//
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { setText, selectText } from "../app/modalSlice";

import pencil from "../pencil.png";

Modal.setAppElement("#root");

const customStyles = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

function EditModal(props) {
  let subtitle;

  const getTextFromStore = useSelector(selectText);
  const dispatch = useDispatch();
  const [getTextFromState, setTextInState] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function modalButtonClick(e) {
    e.preventDefault();
    dispatch(setText(getTextFromState));
    // setTextInState("");
    closeModal();
    props.onSave(e);
  }

  return (
    <div className="editmodal">
      <img className="editpencil" src={pencil} alt="edit" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.3)",
          },

          content: {
            ...customStyles,
            boxShadow:
              "inset 0 0em 3em rgba(0,0,0,0.1), 0 0  0 0px rgb(255,255,255), 0em 0em 0.3em rgba(0,0,0,0.3)",
            borderRadius: 3,
          },
        }}
        contentLabel="Edit Modal"
      >
        <div>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.title}</h2>
          <button onClick={closeModal}>close</button>
          <form onSubmit={modalButtonClick}>
            {props.form}
            <input
              value={getTextFromState}
              onChange={(e) => setTextInState(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditModal;
