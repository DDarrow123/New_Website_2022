import React from 'react';
import Modal from 'react-bootstrap/Modal';
import speak_no_evil from "../assets/images/speak-no-evil-monkey-icon.svg";

const Popin = () => {
    return (
        <>
        {/* // <!-- Button trigger modal --> */}
        {/* <button
        type="button"
        class="buy-button buy-now btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        >
        <span class="button-text"> Buy it now </span>
        </button> */}

        {/* // <!-- Modal --> */}
        <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog modal-dialog-centered modal-lg modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div class="modal-body d-flex flex-column align-items-center">
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
            </div>
            </div>
        </div>
        </div>
        </>
    )
};

export default Popin;