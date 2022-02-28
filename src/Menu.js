import * as React from "react";

export const Menu = ({ isMenuOpen }) => {

  return (
    <div className={`App-Menu ${isMenuOpen ? "Menu-Open" : ""}`}>
      <div className="Menu-Container">
        <a className="Menu-Item" name='Page1' href="/">Home</a>
        <a className="Menu-Item" name='Page2' href="/page1">Page 1</a>
        <a className="Menu-Item" name='Page3' href="/page2">Page 2</a>
      </div>
    </div>
  );
};
