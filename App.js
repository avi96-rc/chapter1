import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      class="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt=""
    />
  </a>
);

/**
     Header
        -logo
        -list items(right side)
        -cart

     body
        -search bar
        -resturant list
            -image
            -name
            -rating
            -cuisines
     Footer       
     */

const HeaderComponent = () => {
 
  return (
    <div className="header" style={{boxShadow:'3px 3px 15px 3px rgb(204, 203, 203)'}}>
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  returnv(<h4>Body</h4>);
};
const Footer = () => {
  returnv(<h4>Footer</h4>);
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
console.log("amit");
