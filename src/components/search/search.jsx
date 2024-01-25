import "./search.css";

// Imported icons
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 className="title">Filter with ease</h3>
        <div className="searchDiv grid">
          <select defaultValue="">
            <option value="" disabled>
              Car Type
            </option>
            <option value={1}>Sedan</option>
            <option value={2}>Hatchback</option>
            <option value={3}>SUV (Sport Utility Vehicle)</option>
            <option value={4}>Crossover</option>
            <option value={5}>Coupe</option>
            <option value={6}>Convertible</option>
            <option value={7}>Wagon</option>
            <option value={8}>Van</option>
            <option value={9}>Truck</option>
            <option value={10}>Minivan</option>
            <option value={11}>Sports Car</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Engine Type
            </option>
            <option value={1}>Gasoline</option>
            <option value={2}>Diesel</option>
            <option value={3}>Electric</option>
            <option value={4}>Hybrid</option>
            <option value={5}>Plug-in Hybrid</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Transmission
            </option>
            <option value={1}>Automatic</option>
            <option value={2}>Manual</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Color
            </option>
            <option value={1}>White</option>
            <option value={2}>Black</option>
            <option value={3}>Red</option>
            <option value={4}>Blue</option>
          </select>
        </div>
        <button className="btn primaryBtn flex">
          <AiOutlineSearch className="icon" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
