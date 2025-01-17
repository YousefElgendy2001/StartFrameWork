import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="parent flex-column my-5 text-black d-flex justify-content-start align-items-center  vh-100">
            <div className="textPortfolio text-center text-uppercase fw-bold">
              <h1>portfolio component</h1>
            </div>
            <div className="icon d-flex justify-content-center align-items-center ">
              <div className="line2"></div>
              <i className="fa-solid fa-star m-3 "></i>
              <div className="line2"></div>
            </div>
            <div className="row g-5">
              <div className="col-md-4 ">
                <div className="image rounded-3 overflow-hidden ">
                  <img src="/images/portHome.png" alt="portHome" className="itemImage    " />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image rounded-3 overflow-hidden ">
                  <img src="/images/portCake.png" alt="portCake" className="itemImage  " />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image rounded-3 overflow-hidden ">
                  <img src="/images/portCircs.png" alt="portCircs" className="itemImage  " />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image rounded-3 overflow-hidden ">
                  <img src="/images/portHome.png" alt="portHome" className="itemImage  " />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image rounded-3 overflow-hidden ">
                  <img src="/images/portCake.png" alt="portCake" className="itemImage  " />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image rounded-3 overflow-hidden ">
                  <img src="/images/portCircs.png" alt="portCircs" className="itemImage  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
