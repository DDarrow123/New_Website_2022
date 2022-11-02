import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import EcommHeader from "../modules/EcommHeader";
import Popin from "../modules/Popin";
import Slideshow from "../modules/Slideshow";
import Carousel from "../modules/CarouselModule";
import lead_image_mobile from "../assets/images/lead-image-mobile.jpg";
import lead_image_desktop from "../assets/images/lead-image-desktop.jpg";
import sticker_icon from "../assets/images/sticker-icon.svg";
import monitor_image from "../assets/images/monitor-image.jpg";
import lock_icon from "../assets/images/lock-icon.svg";

const Ecommerce = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
    <div classNameName="ecommerce">
    <section className="l-main-content">
    <section classNameName="container-fluid">
    <section className="row">
      <section className="l-content">
        <div className="lead-image-wrapper">
            <EcommHeader />
          <div className="lead-content d-flex flex-column align-items-center justify-content-center">
            <span className="subtitle">
              Du JAMAIS VU (enfin jusqu'à maintenant, du coup)
            </span>
            <h5 className="caption">
              Avec Vision.R, travaillez au bureau... comme si vous étiez encore
              à la maison !
            </h5>
          </div>
          <div className="lead-image-inner-wrapper">
            <img
              className="lead-image-mobile d-md-none"
              src={lead_image_mobile}
              alt=""
            />
            <img
              className="lead-image d-none d-md-block"
              src={lead_image_desktop}
              alt=""
            />
            <div className="sticker-icon-wrapper">
              <img 
                className="sticker-icon" 
                src={sticker_icon}
                alt=""
            />
              <div className="sticker-text d-flex flex-column align-items-center">
                <span className="text-offer">Offre speciale</span>

                <span className="text-price">799,99€</span>

                <span className="text-second-price">*au lieu de 1.499,99€</span>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-wrapper d-flex flex-column align-items-center justify-content-center">
          <div className="desc">
            Vision.R with a grand "R" like in the mot "Revolution" ! You are
            afraid to feel déstabilized with the futur retour au bureau ? With
            Vision.R, be rassuré.e.s ! Get instant, real time, high resolution,
            social videocall and feel comme à la maison. Bref, get ready to
            faire un carton !
          </div>
          <Button 
            variant="primary"
            className="buy-button buy-now btn btn-primary"
            onClick={() => setModalShow(true)}
          >
            <span class="button-text"> Buy it now </span>
          </Button>
          {/* <button
        type="button"
        class="buy-button buy-now btn btn-primary"
        data-bs-toggle="modal" */}
        {/* data-bs-target="#staticBackdrop"
        > */}
        {/* <span class="button-text"> Buy it now </span>
        </button> */}
          <Popin
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="monitor d-lg-flex">
          <div className="monitor-image-wrapper">
            <img 
              className="monitor-image" 
              src={monitor_image}
              alt="computer monitor svg"
            />
          </div>
          <div className="monitor-text d-flex flex-column justify-content-center flex-grow-1">
            <div className="monitor-text-wrapper">
              <div className="lock">
                <img 
                  src={lock_icon}
                  alt="lock icon svg"
                />
              </div>
              {/* <!-- <Mobile only> --> */}
              <h5 className="caption monitor-caption">
                The pudique (or je suis en pyjama et j'assume pas) effect
              </h5>
              <paragraph className="subtext d-sm-block d-md-none"
                >Start from zero, choose your background and create your new
                life while impressing the collègues.
              </paragraph>
              {/* <!-- <Desktop only> --> */}
              <paragraph className="subtext d-none d-md-block">
                With our no camera mode, you can be wherever you want and be en
                pyjama in totale discretion with professionnalisme.
              </paragraph>
            </div>
          </div>
        </div>
        <div className="slideshow">
          <div className="caption">
            Some indispensables accessories to optimize your experience
          </div>
          <Slideshow />
        </div>
      </section>
    </section>
  </section>
</section>

    </div>)
};

export default Ecommerce;