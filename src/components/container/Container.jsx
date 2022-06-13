import Enteries from "../enteries/Enteries";
import Search from "../search/Search";
import Upload from "../upload/Upload";
import React from "react";
import { useEffect } from "react";
import FileMesh from "../../service/FileMesh";

const Container = () => {
  const [root, setRoot] = React.useState();
  const [list, setList] = React.useState([]);
  const [interval, setInterval0] = React.useState(null);
  const [search, setSearch] = React.useState();
  const [chunkSize, setChunkSize] = React.useState(10000);

  useEffect(() => {
    FileMesh.Root().then(setRoot);
    FileMesh.List().then(setList);
  }, []);

  const setDownloadSpeed = () => {
    setInterval0(
      setInterval(function () {
        FileMesh.List().then(setList);
        console.log("downloading");
      }, 1000)
    );
  };

  const clearSearch = () => setSearch();

  const clearDownloadSpeed = () => {
    clearInterval(interval);
  };

  return (
    <>
      {root ? (
        <div className="Container">
          <div className="Search">
            <Search setSearch={setSearch} />
          </div>
          <div className="Container-row">
            <div className="upload">
              <Upload setDownloadSpeed={setDownloadSpeed} />
            </div>
            <div className="TableContainer">
              <div className="form">
                <div className="form-item">
                  <p>
                    User IP : {root.ipAddress} | Parent :{" "}
                    {root.parent === "" ? "None" : root.parent}
                  </p>
                </div>
                <div className="form-item">
                  <input
                    onChange={(e) => setChunkSize(e.target.value)}
                    value={chunkSize}
                  />
                  <label for="password">Chunk Size</label>
                </div>
              </div>

              <Enteries
                search={search}
                list={list}
                chunkSize={chunkSize}
                clearDownloadSpeed={clearDownloadSpeed}
                setDownloadSpeed={setDownloadSpeed}
                clearSearch={clearSearch}
              />
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
