import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar"
// import Home from "./components/Home/Home";
// import Search from "./components/Search/Search";
// import Support from "./components/Support/Support";
// import Info from "./components/Info/Info";
// import Lounge from "./components/Lounge/Lounge";
// import Travellers from "./components/Travelers/Travellers";
// import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Home";
import Seatspage from "./pages/Seats";
import Destinationpage from "./pages/Destination";
import Offerspage from "./pages/Offers";
import Aboutpage from "./pages/About";
import Page404 from "./pages/Page404";

const App = () => {
  return(
    <div>
      {/* <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travellers/>
      <Footer/> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/seats" element={<Seatspage />} />
        <Route path="/destination" element={<Destinationpage />} />
        <Route path="/offers" element={<Offerspage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App