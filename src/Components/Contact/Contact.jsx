import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="parent flex-column my-5 text-black d-flex justify-content-start align-items-center  vh-100">
            <div className="textPortfolio text-center text-uppercase fw-bold">
              <h1>conatct section</h1>
            </div>
            <div className="icon d-flex justify-content-center align-items-center ">
              <div className="line2"></div>
              <i className="fa-solid fa-star m-3 "></i>
              <div className="line2"></div>
            </div>

            <div className="form">
              <div className="userName mb-3">
                <label htmlFor="userName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="userName"
                />
              </div>
              <div className="userAge mb-3">
                <label htmlFor="userAge" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="userAge"
                />
              </div>
              <div className="userEmail mb-3">
                <label htmlFor="userEmail" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="userEmail"
                />
              </div>
              <div className="userPasword">
                <label htmlFor="userPasword" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="userPasword"
                />
              </div>
              <button className="btn btn-info mt-3">Send Massage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
