import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="Banner">
       <div className="Banner-section second">
        <div className="Banner-section-statement">
          <h2>Transform Your Brand</h2>
          <p>
            We are a full Service creative agency specializing in helping brands
            go fast.Engage your clients through compelling visuals that do most
            of the marketing for you.
          </p>
          <h3 className="statement1">Learn More</h3>
        </div>
        <div className="Banner-section-image1"></div>
      </div>

      <div className="Banner-section  ">
        <div className="Banner-section-image2"></div>
        <div className="Banner-section-statement">
          <h2>Stand out to the right audience</h2>
          <p>
            Using collaborative formula of designers,researchers,
            photographers,videographers and copywriters,we'll build and extend
            your brand in digital places.
          </p>
          <h3 className="statement2">Learn More</h3>
        </div>
      </div>

      <div className="Banner-section">
        <div className="Banner-section-image3">
          <div className="Banner-section-image3-statement">
            <h2>Graphic Design</h2>
            <p>
              Great design makes you memorable.We deliver, artwork that
              underscores your brand message and catures potential client's
              attention
            </p>
          </div>
        </div>
        <div className="Banner-section-image4">
          <div className="Banner-section-image4-statement">
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,high
              quality photos that improve your business image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
