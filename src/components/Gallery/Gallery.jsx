import React from "react";
import "./Gallery.scss";
import Imagebottles from "../../assets/mobile/image-gallery-milkbottles.jpg";
import Imageorange from "../../assets/mobile/image-gallery-orange.jpg";
import Imagecone from "../../assets/mobile/image-gallery-cone.jpg";
import Imagesugarcubes from "../../assets/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery__pics">
        <div>
          <img
            className="Gallery__images"
            src={Imagebottles}
            alt="milk bottles"
          />
        </div>
        <div>
          <img className="Gallery__images" src={Imageorange} alt="oranges" />
        </div>{" "}
      </div>
      <div className="Gallery__pics">
        <div>
          <img
            className="Gallery__images"
            src={Imagecone}
            alt="ice cream cone"
          />
        </div>
        <div>
          <img
            className="Gallery__images"
            src={Imagesugarcubes}
            alt="sugar cubes"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Gallery;
