import React from "react";
import { useEffect } from "react";
import FileMesh from "../../service/FileMesh";

const Enteries = ({
  search,
  list,
  clearDownloadSpeed,
  setDownloadSpeed,
  clearSearch,
}) => {
  const download = (item) => {
    clearSearch();
    FileMesh.Download(item).then(() => {
      alert("File is downloading!");
      setDownloadSpeed();
    });
  };

  useEffect(() => {
    if (list) {
      let data = list.filter((item) => item.progress !== 1);
      if (data.length === list.length) {
        clearDownloadSpeed();
      }
    }
  }, [list]);

  return (
    <table className="Enteries">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Size</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {search ? (
          search.length > 0 ? (
            search.map((item) => (
              <tr key={item.id}>
                <td data-label="Name">{item.name}</td>
                <td data-label="Size">{item.size}</td>
                <td data-label="">
                  <button onClick={() => download(item)}>Download</button>
                </td>
              </tr>
            ))
          ) : (
            <p style={{ padding: "1em", color: "red" }}> Not found!</p>
          )
        ) : list.length > 0 ? (
          list.map((item) => (
            <>
              <tr key={item.id}>
                <td data-label="Name">{item.name}</td>
                <td data-label="Size">{Math.ceil(item.size / 1000)} kb</td>
                <td data-label="">
                  <button disabled>
                    {item.downloadSpeed !== 0
                      ? item.downloadSpeed
                      : "Downloaded"}
                  </button>
                </td>
              </tr>
              {item.progress !== 1 && (
                <div class="progress">
                  <span
                    class="progress-bar"
                    style={{ width: item.progress * 100 + "%" }}
                  ></span>
                </div>
              )}
            </>
          ))
        ) : (
          <p style={{ padding: "1em", color: "red" }}> Upload a File!</p>
        )}{" "}
      </tbody>
    </table>
  );
};

export default Enteries;
