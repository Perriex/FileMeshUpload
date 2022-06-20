import logo from "../../assets/icons8-document.gif";

const DocButton = ({ showDoc, setShowDoc }) => {
  return (
    <button
      onClick={() => {
        setShowDoc(!showDoc);
      }}
      style={{
        cursor: "pointer",
        width: "4em",
        height: "4em",
        borderRadius: "50%",
        background: "white",
        position: "absolute",
        left: "8%",
        bottom: "6%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <img src={logo} alt="" style={{ width: "65%", borderRadius: "10%" }} />
    </button>
  );
};
export default DocButton;
