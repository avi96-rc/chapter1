import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("food villa");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div
      className="header"
      style={{ boxShadow: "3px 3px 15px 3px rgb(204, 203, 203)" }}
    >
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
      {
        <button onClick={() => setIsLoggedIn((prev) => !prev)}>
          {isLoggedIn ? "logout" : "login"}
        </button>
      }
    </div>
  );
};

const Title = () => {
  // console.log('rendered title')
  return (
    <a href="/">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt=""
      />
    </a>
  );
};

export default Header;
