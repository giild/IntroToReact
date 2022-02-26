import "./App.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Modal} from "./Modal";
import {Menu} from "./Menu";
import { ReactDimmer } from "react-dimmer";

export default function App() {
  const [isModalOpen, setModal] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="App">
        <div className="App-Header">
          <GiHamburgerMenu className="Menu-Btn" onClick={handleMenu} />
          <div className="Nav"></div>
        </div>
        <div className="body">
        Example App
        </div>
      </div>

      {isModalOpen && <Modal closeModal={setModal} />}
      <Menu isMenuOpen={isMenuOpen} />

      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
}
