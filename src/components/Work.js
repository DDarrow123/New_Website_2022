import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import { TweenMax, Elastic, TweenLite, TimelineLite, CSSPlugin } from "gsap";
import play_icon from "../assets/images/play_icon.svg";
import restart_icon from "../assets/images/restart_icon.svg";
import pause_icon from "../assets/images/pause_icon.svg";
import gallery_img from "../assets/images/deniz-demirci-2-unsplash.jpg";
import festival_img from "../assets/images/aditya-ghosh-unsplash.jpg";
import new_york from "../assets/images/anton-sjolander-unsplash.jpg";
import georges_malher from "../assets/images/georges-malher-unsplash.jpg";
import future from "../assets/images/ally-griffin-unsplash.jpg"

const lettersArray = ["W", "O", "R", "K"];

class Work extends Component {
  constructor(props) {
    super(props);
    this.letters = [];
    this.tl = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.tl.staggerTo(this.letters, 0.5, { y: 200, autoAlpha: 0.5 }, 0.5);
  }

  render() {
    return (
      <div key={'work'}>
        <header className="App-header top-header">
          <div className="general-btn-container">
            <img
              className="site-btn"
              src={play_icon}
              alt=""
              onClick={() => this.tl.play()}
            />
            <img
              className="site-btn"
              src={pause_icon}
              alt=""
              onClick={() => this.tl.pause()}
            />
            <img
              className="site-btn"
              src={restart_icon}
              alt=""
              onClick={() => this.tl.reverse()}
            />
          </div>
          <div className='top-header__name'>Devon Darrow</div>
        </header>
        <div className="work-container">
          <div className="left-work-bar">
            <div className="work-overlay">
              <div className="work-title">
                {lettersArray.map((element, index) => (
                  <div
                    key={element.id}
                    ref={div => (this.letters[index] = div)}
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
            <div className="image-wrapper">
              <img
              className="work-image" 
              src={ georges_malher } 
              alt=""
              />
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
                  <div className="card-wrapper">
                    <div className="card">
                      <a
                        href="https://www.businessinsider.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="work-logo" 
                          src={ new_york } 
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="card-desc">
                      <span className="card-name-desc">Front-end work at Insider</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-wrapper">
                    {" "}
                    <div className="card">
                      <a
                        href="https://www.devondarrow.com/Example_2/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img 
                          className="work-image" 
                          src={ festival_img } 
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="card-desc">
                      <span className="card-name-desc">Festival Site</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-wrapper">
                    <div className="card">
                      <a
                        href="https://www.devondarrow.com/Example_3"
                        rel="noopener noreferrer"
                        target="_blank"
                        alt=""
                      >
                        <img 
                          src={ gallery_img }
                          alt="" 
                        />
                      </a>
                    </div>
                    <div className="card-desc">
                      <span className="card-name-desc">Gallery Site - Desktop</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card-wrapper">
                    <div className="card">
                      <img
                        className="work-logo" 
                        src={ future } 
                        alt=""
                      />
                    </div>
                    <div className="card-desc">
                      <span className="card-name-desc">More Work Coming Soon...</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
//https://ddarrow123.github.io/Example_1/index.html
