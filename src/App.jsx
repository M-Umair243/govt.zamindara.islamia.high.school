import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SmNavbar from "./Components/SmNavbar";
import SocialIcons from "./Components/SocialIcons";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Instructors from "./Pages/Instructors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [isShow, setIsShow] = useState(true);
  const showHandler = () => {
    setIsShow(!isShow);
  };
  const hideHandler = () => {
    setIsShow(!isShow);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar isShow={isShow} showHandler={showHandler} hideHandler={hideHandler}/>
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar isShow={isShow} showHandler={showHandler} hideHandler={hideHandler}/>
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar isShow={isShow} showHandler={showHandler} hideHandler={hideHandler}/>
          <Gallery />
          <Footer />
        </>
      ),
    },

    {
      path: "/contact",
      element: (
        <>
          <Navbar isShow={isShow} showHandler={showHandler} hideHandler={hideHandler}/>
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/instructors",
      element: (
        <>
          <Navbar isShow={isShow} showHandler={showHandler} hideHandler={hideHandler}/>
          <Instructors />
          <Footer />
        </>
      ),
    },
  ]);
 
  return (
    <div className="App_Container">
      <div className="social_icons">
        <SocialIcons />
      </div>
     
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
