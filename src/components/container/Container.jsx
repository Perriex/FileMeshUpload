import Enteries from "../enteries/Enteries";
import Upload from "../upload/Upload";

const Container = () => {
  return (
    <div className="Container">
      <div className="upload">
        <Upload />
      </div>
      <div style={{ width: "50%" }}>
        <Enteries/>
      </div>
    </div>
  );
};

export default Container;
