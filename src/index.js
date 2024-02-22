import "./index.css";

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
};

function Loader({ logo }) {
  return (
    <div style={styles.loader}>
      {/* Loading container with logo and text */}
      <div style={styles.loading}>
        {/* Logo image */}
        <img id="logo" src={logo} alt="loader" style={styles.logo} />
        {/* Loading text */}
        <h5 style={styles.text}>Loading...</h5>
      </div>
    </div>
  );
}

export default Loader;
