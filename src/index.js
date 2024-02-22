const styles = {
    loader: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    loading: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid white",
    },
    logo: {
        border: "4px solid white",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginRight: "1rem",
        marginBottom: "2rem",
        animation: "spin 2s linear infinite",
    },
    text: {
        color: "white",
        fontFamily: "Arial, sans-serif",
        fontSize: "1.5rem",
    },
}

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
        <h5 className="text-white font-primary text-[1rem] vvsm:text-[1.5rem] vsm:text-[1.7rem] md:text-[2.5rem] sm:text-[2rem] ">
          Loading...
        </h5>
      </div>
    </div>
  );
}

export default Loader;
