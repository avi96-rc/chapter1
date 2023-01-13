import React from "react";
import { createElement } from "react";
import ReactDOM from "react-dom/client";

const Title =  (
  <h1 id="title" key="h2">
    this is title
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
        {Title}
      <h1>Namaste react functional component</h1>
      <h2>this heading 2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
console.log("amit");
