import React from "react";
import hero from "../../assets/images/hero.svg";
export default function Home() {
  return (
    <div id="home">
      <div className="container py-5">
        <div className="row">
          
          <div className="parent flex-column d-flex justify-content-center align-items-center text-white  vh-100">
          <div className="imageHome text-center mb-5">
            <img src={hero} alt="portHome" className="imageChild" />
          </div>

            <div className="textHome text-center text-uppercase ">
              <h1>start Framework</h1>
            </div>
            <div className="icon d-flex justify-content-center align-items-center ">
              <div className="line"></div>
              <i className="fa-solid fa-star m-3"></i>
              <div className="line"></div>
            </div>

            <div className="text">
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
