import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client";
import logo from "../../../PetCare/client/src/assets/images/avatar.png";
import "./index.css";


function Loader({ logo }) {
  return (
    <div className="loader h-[100vh] w-[100vw] flex justify-center items-center bg-black">
      {/* Loading container with logo and text */}
      <div className="loading h-[100%] w-[100%] flex flex-col sm:flex-row justify-center items-center border-4 border-white-800">
        {/* Logo image */}
        <img
          id="logo"
          src={logo}
          alt="loader"
          className="border-4  border-white w-[150px] sm:w-[200px] rounded-[50%] sm:mr-[1rem] sm:mb-[0] mb-[2rem] animate-spin"
        />
        {/* Loading text */}
        <h5
          style={{ fontFamily: "var(--fontPrimary)" }}
          className="textt text-white  text-[1rem] vvsm:text-[1.5rem] vsm:text-[1.7rem] md:text-[2.5rem] sm:text-[2rem] "
        >
          Loading...
        </h5>
      </div>
    </div>
  );
}

// export default Loader;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Loader logo={logo} />);

// ReactDOM.render(<Loader />);
