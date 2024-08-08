import React from "react";
import Emilyimage from "../../assets/image-emily.jpg";
import Jennieimage from '../../assets/image-jennie.jpg';
import Thomasimage from '../../assets/image-thomas.jpg';
import "./Feedback.scss";


const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback__heading">
        <h2>CLIENT TESTIMONIALS</h2>
      </div>
      <div className="feedback__cards">
        <div className="feedback__cards--1">
          <img
            className="feedback__cards--image"
            src={Emilyimage}
            alt="Emily Image"
          />
          <p className="feedback__cards--text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4 className="feedback__cards--name">Emily R.</h4>
          <p className="feedback__cards--designation"> Marketing Director </p>
        </div>
        <div className="feedback__cards--2">
          <img
            className="feedback__cards--image"
            src={Thomasimage}
            alt="Thomas Image"
          />
          <p className="feedback__cards--text">
          Sunnyside's enthusiasm coupled with their keen interest in our
          brand's success made it a satisfying and enjoyable experience.
          </p>
          <h4 className="feedback__cards--name">Thomas S.</h4>
          <p className="feedback__cards--designation"> Chief Operating Officer </p>
        </div>
        <div className="feedback__cards--3">
          <img
            className="feedback__cards--image"
            src={Jennieimage}
            alt="Jennie Image"
          />
          <p className="feedback__cards--text">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
          </p>
          <h4 className="feedback__cards--name">Jennie F.</h4>
          <p className="feedback__cards--designation">Business Owner </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
