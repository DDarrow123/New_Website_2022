import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import gallery from "../assets/images/deniz-demirci-2-unsplash.jpg";
import festival from "../assets/images/aditya-ghosh-unsplash.jpg";
import new_york from "../assets/images/anton-sjolander-unsplash.jpg";
import georges_malher from "../assets/images/georges-malher-unsplash.jpg";
import ecommerce from "../assets/images/marcella-marcella-unsplash.jpg";
import future from "../assets/images/ally-griffin-unsplash.jpg"
import grid from "../assets/images/marco-chilese-unsplash.jpg";

const Work = () => {

  return (
    <div key={'work'}>
      <header className="top-header">
        <div className='top-header__name'>Devon Darrow</div>
      </header>
      <div className="work-container">
        <div className="left-work-bar">
          <div className="image-wrapper">
            <img
            className="work-image" 
            src={ georges_malher } 
            alt=""
            />
            <div className="work-title">WORK</div>
          </div>
        </div>
        <div className="right-work-bar">
          <Swiper
            modules={[ Pagination ]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1260: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>                  
              <div className="carousel-item-wrapper">
                <div className="card">
                  <Link
                    id="insider"
                    to="/insider"
                  >
                    <img
                      className="work-logo" 
                      src={ new_york } 
                      alt=""
                    />
                  </Link>
                  <div className="card-desc">
                    <span className="headline-bold">Front-end work at Insider</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item-wrapper">
                <div className="card">
                  <Link
                    id="festival"
                    to="/festival"
                  >
                    <img 
                      className="work-image" 
                      src={ festival } 
                      alt=""
                    />
                  </Link>
                  <div className="card-desc">
                    <span className="headline-bold">Festival Site</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item-wrapper">
                <div className="card">
                  <Link
                    id="gallery"
                    to="/gallery"
                    alt=""
                  >
                    <img 
                      src={ gallery }
                      alt="" 
                    />
                  </Link>
                  <div className="card-desc">
                    <span className="headline-bold">Gallery Site - Desktop</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item-wrapper">
                <div className="card">
                  <Link
                    id="grid"
                    to="/grid"
                    alt=""
                  >
                    <img 
                      src={ grid }
                      alt="" 
                    />
                  </Link>
                  <div className="card-desc">
                    <span className="headline-bold">Travel Grid</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item-wrapper">
                <div className="card">
                  <Link
                    id="ecommerce"
                    to="/ecommerce"
                    alt=""
                  >
                    <img 
                      src={ ecommerce }
                      alt="" 
                    />
                  </Link>
                  <div className="card-desc">
                    <span className="headline-bold">Ecommerce Site</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>            
            <SwiperSlide>
            <div className="carousel-item-wrapper">
                <div className="card">
                  <img
                    className="work-logo" 
                    src={ future } 
                    alt=""
                  />
                  <div className="card-desc">
                    <span className="headline-bold">More Work Coming Soon...</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Work;
