import product_doggo_image from "../assets/images/product-doggo-image.jpg";
import product_monitor_image from "../assets/images/product-monitor-image.jpg";
import product_slipper_image from "../assets/images/product-slipper-image.jpg";

const Slideshow = () => {
    return (
    <div class="slideshow-outer-wrapper">
    <div class="slideshow-inner-wrapper d-flex justify-content-lg-center">
        <div class="slideshow-product d-flex flex-column align-items-center">
        <img 
          class="slideshow-image" 
          src={product_doggo_image}
          alt=""
        />
        <div class="desc slideshow-desc">
            The funny filter kit (D'jeuns friendly)
        </div>
        <div class="subtext slideshow-subtext">199,00 €</div>
        </div>
        <div class="slideshow-product d-flex flex-column align-items-center">
        <img 
          class="slideshow-image" 
          src={product_monitor_image}
          alt=""
        />
        {/* <!-- <Desktop only> --> */}
        <div class="desc slideshow-desc d-none d-md-block">Screen Camera off</div>
        {/* <!-- <Mobile only> --> */}
        <div class="desc slideshow-desc d-md-none">Screen Camera off si texte long</div>
        <div class="subtext slideshow-subtext">229,00 €</div>
        </div>
        <div class="slideshow-product d-flex flex-column align-items-center">
        <img 
          class="slideshow-image" 
          src={product_slipper_image} 
          alt=""
        />
        <div class="desc slideshow-desc">The Charentaiz (Yeuv Friendly)</div>
        <div class="subtext slideshow-subtext">349,95 €</div>
        </div>
    </div>
    </div>
    )
};

export default Slideshow;