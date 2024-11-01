import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/street.jpg" alt="AboutMe" className="" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5"> About Us</h3>
              <h1 className="display-6">
                {" "}
                Who <b> We </b> Are
              </h1>
              <hr />
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quam porro, accusantium soluta nisi provident nulla eius ipsa
                molestiae facilis voluptatem sequi, cumque, hic quia aut
                expedita ut quaerat iusto fugiat quibusdam? Animi exercitationem
                facilis ducimus vero accusamus magnam quas! Tempora obcaecati
                dicta at ipsum vitae ullam dignissimos consequatur quis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
