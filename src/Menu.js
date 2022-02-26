import * as React from "react";

export const Menu = ({ isMenuOpen }) => {
  return (
    <div className={`App-Menu ${isMenuOpen ? "Menu-Open" : ""}`}>
      <div className="Menu-Container">
      <div className="Menu-Item">Page 1</div>
      <div className="Menu-Item">Page 2</div>
      <div className="Menu-Item">Page 3</div>
      </div>
    </div>
  );
};
