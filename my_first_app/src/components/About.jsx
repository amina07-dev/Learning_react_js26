import Lily from "../assets/Lily.jpg";
const About = () => {
  return (
    <>
      <section className="mt-5 mb-5">
        <div className="container" id="about">
          <div className="row">
            <h1>About Us</h1>
            <div className="md:col-4">
              <section className="card">
                <img src={Lily} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </section>
            </div>
            <div className="md:col-4">
              {" "}
              <section className="card">
                <img src={Lily} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </section>
            </div>
            <div className="md:col-4">
              {" "}
              <section className="card">
                <img src={Lily} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
