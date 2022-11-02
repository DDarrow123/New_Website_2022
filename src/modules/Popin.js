import React from 'react';
import Modal from 'react-bootstrap/Modal';
import speak_no_evil from "../assets/images/speak-no-evil-monkey-icon.svg";

const Popin = props => {
    return (
      <Modal 
        { ...props }
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body class="modal-body d-flex flex-column align-items-center">
                <img 
                    src={speak_no_evil} 
                    class="modal-icon"
                    alt=""
                />
                <div class="modal-intro">Vous y avez (vraiment?) cru ?</div>
                <paragraph class="modal-para text-offer">
                En tout cas, on espère que ça vous a fait sourire, parce qu'on en a
                bien besoin en ce moment. Et sinon, vous avez sûrement des produits
                plus intéressants à vendre.
                </paragraph>
                <paragraph class="modal-para text-offer">
                Ça tombe bien, nos équipes sont plus fortes en communication digitale
                qu'en innovations en carton.
                </paragraph>
            </Modal.Body>
      </Modal>
    )
};

export default Popin;