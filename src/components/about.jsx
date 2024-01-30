import {paragraph1, paragraph2, whyChooseUs1, whyChooseUs2} from "./constants.jsx"

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {whyChooseUs1.map((d, i) => (<li key={`${d}-${i}`}>{d}</li>))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                  {whyChooseUs2.map((d, i) => (<li key={`${d}-${i}`}>{d}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About