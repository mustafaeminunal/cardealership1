import { useState } from "react";
import "./App.css";

// Components below

import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Search from "./components/search/search.jsx";
import Reviews from "./components/reviews/reviews.jsx";
import Dealers from "./components/sellers/dealers.jsx";
import Trending from "./components/trending/trending.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Reviews />
      <Dealers />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
