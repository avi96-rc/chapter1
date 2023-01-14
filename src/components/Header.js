const Header = () => {
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
    </div>
  );
};

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt=""
    />
  </a>
);

export default Header;
