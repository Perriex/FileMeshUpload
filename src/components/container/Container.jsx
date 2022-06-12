import Enteries from "../enteries/Enteries";
import Search from "../search/Search";
import Upload from "../upload/Upload";
import React from "react";
import { useEffect } from "react";
import FileMesh from "../../service/FileMesh";

const Container = () => {
  const [root, setRoot] = React.useState();
  const [list, setList] = React.useState([]);
  const [search, setSearch] = React.useState();

  useEffect(() => {
    FileMesh.Root().then(setRoot);
    FileMesh.List().then(setList);
  }, []);

  return (
    <>
      {root ? (
        <div className="Container">
          <div className="Search">
            <Search setSearch={setSearch} />
          </div>
          <div className="Container-row">
            <div className="upload">
              <Upload />
            </div>
            <div style={{ width: "50%" }}>
              <p>User IP : {root.address}</p>
              <p>Depth : {root.depth}</p>
              <Enteries search={search} list={list} />
            </div>
          </div>
        </div>
      ) : (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Container;
