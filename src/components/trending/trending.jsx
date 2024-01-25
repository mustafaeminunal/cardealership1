import "./trending.css";

// Imported images
import series1 from "../../assets/bmwseries1.png";
import series2 from "../../assets/bmwseries2.png";
import series3 from "../../assets/bmwseries3.png";
import series4 from "../../assets/bmwseries4.png";

// Imported icons

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const Trending = () => {
  return (
    <div className="trending">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Trending</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={series1} alt="" />
            </div>
            <h5 className="carTitle">BMW Series 1</h5>
            <span className="miles">5000km</span>
            <div className="price_seller flex">
              <span className="price">$40,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={series2} alt="" />
            </div>
            <h5 className="carTitle">BMW Series 2</h5>
            <span className="miles">5000km</span>
            <div className="price_seller flex">
              <span className="price">$40,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={series3} alt="" />
            </div>
            <h5 className="carTitle">BMW Series 3</h5>
            <span className="miles">5000km</span>
            <div className="price_seller flex">
              <span className="price">$40,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={series4} alt="" />
            </div>
            <h5 className="carTitle">BMW Series 4</h5>
            <span className="miles">5000km</span>
            <div className="price_seller flex">
              <span className="price">$40,000</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
