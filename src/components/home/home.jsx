import "./home.css";
import homeImage from "../../assets/bmwseries7.png";

const Home = () => {
  return (
    <div className="home">
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Today's favourite car</span>
          <h1 className="homeTitle">BMW Series 7</h1>
          <div className="btnContainer flex">
            <button className="btn secondaryBtn">More Details</button>
          </div>
        </div>
        <div className="homeImage">
          <img src={homeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
