import "./dealers.css";

// Imported photos
import dealership1 from "../../assets/dealership1.jpg";
import dealership2 from "../../assets/dealership2.jpg";
import dealership3 from "../../assets/dealership3.jpg";
import dealership4 from "../../assets/dealership4.jpg";

// Imported icons
import { IoIosCall } from "react-icons/io";

const Dealers = () => {
  return (
    <div className="dealers section">
      <div className="secContainer container">
        <div className="">
          <h3 className="secTitle">Visit us at one of our dealerships</h3>
          <div className="grid dealershipDiv">
            <div className="dealershipArticle flex">
              <img src={dealership1} alt="" />
              <span className="dealershipTitle">Drumul Taberei</span>
              <span className="dealershipContact">
                <a href="tel:+40 372 112 500" className="flex">
                  <IoIosCall className="icon callIcon" />
                  <span className="contactNumber">0123456789</span>
                </a>
              </span>
            </div>
            <div className="dealershipArticle flex">
              <img src={dealership2} alt="" />
              <span className="dealershipTitle">Iuliu Maniu</span>
              <span className="dealershipContact">
                <a href="tel:+40 372 112 500" className="flex">
                  <IoIosCall className="icon callIcon" />
                  <span className="contactNumber">0123456789</span>
                </a>
              </span>
            </div>
            <div className="dealershipArticle flex">
              <img src={dealership3} alt="" />
              <span className="dealershipTitle">Dristorului</span>
              <span className="dealershipContact">
                <a href="tel:+40 372 112 500" className="flex">
                  <IoIosCall className="icon callIcon" />
                  <span className="contactNumber">0123456789</span>
                </a>
              </span>
            </div>
            <div className="dealershipArticle flex">
              <img src={dealership4} alt="" />
              <span className="dealershipTitle">Dorobanti</span>
              <span className="dealershipContact">
                <a href="tel:+40 372 112 500" className="flex">
                  <IoIosCall className="icon callIcon" />
                  <span className="contactNumber">0123456789</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealers;
