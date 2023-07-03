import { useEffect, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import bannervideo from "../../../assets/bannervideo.mp4";
import logo from "../../../assets/Logo.png";
import classes from "./Header.module.css";
import HeaderBtns from "./HeaderBtns";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const [hideHeader, setHideHeader] = useState(false);
  const location = useLocation();
  const isVideoPage = location.pathname === "/"; // Change "/video-page" to the actual URL of your video page

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldHide = scrollTop > 490; // Adjust the scroll value threshold as needed

      setHideHeader(shouldHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!hideHeader && (
        <header className={classes.header}>
          <div className={classes.logoimage}>
            <img src={logo} alt="Logo" />
          </div>
          <HeaderBtns />
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      )}
      {isVideoPage && (
        <div className={classes["main-image"]}>
          <video autoPlay loop muted>
            <source src={bannervideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default Header;
