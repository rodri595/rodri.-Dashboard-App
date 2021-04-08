import React from "react";
import sliderpic from "../../assets/images/slider-pic.png";

const SliderCard = () => {
  const Handler = () => {
    alert("Rodrigo wuz here");
  };
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__inner owl-carousel js-slider owl-loaded owl-drag">
          <div className="">
            <div className="">
              <div className="active" style={{ width: "320x" }}>
                <div className="slider__item">
                  <div className="slider__details">
                    <div className="slider__title h5">
                      Set a Google Analytics Code
                    </div>
                    <div className="slider__text">
                      Did you know i dont give a fuck right know?
                    </div>
                    <a
                      className="slider__btn btn btn_white js-popup-open"
                      href="https://erazo.netlify.app/"
                      data-effect="mfp-zoom-in"
                    >
                      Settings
                    </a>
                  </div>
                  <div className="slider__preview">
                    <img className="slider__pic" src={sliderpic} alt />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-dots">
            <button role="button" className="owl-dot active">
              <span></span>
            </button>
            <button role="button" className="owl-dot ">
              <span></span>
            </button>
            <button role="button" className="owl-dot active">
              <span></span>
            </button>
          </div>
        </div>
        <button className="slider__close" onClick={() => Handler()}>
          <svg className="icon icon-remove">
            <path d="M1.613.21l.094.083L5 3.585 8.293.293a1 1 0 0 1 1.497 1.32l-.083.094L6.415 5l3.292 3.293a1 1 0 0 1-1.32 1.497l-.094-.083L5 6.415 1.707 9.707A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 1.613.21z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
