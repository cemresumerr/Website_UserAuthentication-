import React from "react";

export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-m-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-white text-center">
                LEARN HOW TO STYLE YOURSELF
              </h1>
              <p className="lead text-center">CCCCC</p>
              <div className="buttons text-center">
                <button
                  className="btn btn-light me-4
                rounded-pill px-4 py-2 "
                >
                  Contact Us
                </button>

                <button
                  className="btn btn-outline-light 
                rounded-pill px-4 py-2"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
