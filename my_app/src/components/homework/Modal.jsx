import React from "react";

import { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }


  return (
    <>
      <button onClickCapture={toggleModal} className="btn-modal">
        open modal
      </button>

      {modal&&(
          <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h2>This is modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              error optio omnis voluptas voluptatum odio voluptatem molestias
              alias iste iusto laboriosam voluptate soluta assumenda fuga quidem
              aliquid illum, exercitationem voluptates velit natus. Nihil,
              laudantium? Ex, ab earum? Modi, itaque. Rem.
            </p>
            <button onClick={toggleModal} className="close-modal">
              CLOSE
            </button>
          </div>
        </div>
      </div>
      )}
    
    </>
  );
};

export default Modal;
