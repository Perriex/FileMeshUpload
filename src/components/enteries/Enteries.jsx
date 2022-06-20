import React from "react";
import { useEffect } from "react";
import FileMesh from "../../service/FileMesh";

const Enteries = ({
  search,
  list,
  clearDownloadSpeed,
  setDownloadSpeed,
  clearSearch,
  chunkSize,
}) => {
  const download = (item) => {
    clearSearch();
    FileMesh.Download(item, chunkSize).then(() => {
      alert("File is downloading!");
      setDownloadSpeed();
    });
  };

  useEffect(() => {
    if (list.length > 0) {
      let data = list.filter((item) => item.progress === 1);
      if (data.length === list.length) {
        clearDownloadSpeed();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const copy = (item) => {
    console.log("clicked");
    var copyText = item.path;

    navigator.clipboard.writeText(copyText);

    alert("Copied the path: " + copyText);
  };

  return (
    <>
      <table className="Enteries">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col"></th>
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
                  <td></td>
                </tr>
              ))
            ) : (
              <p style={{ padding: "1em", color: "red" }}> Not found!</p>
            )
          ) : list.length > 0 ? (
            list.map((item) => (
              <>
                <tr key={item.id}>
                  <td data-label="Name">{item.name || "None"}</td>
                  <td data-label="Size">{Math.ceil(item.size / 1000)} kb</td>
                  <td data-label="">
                    {item.name !== null ? (
                      <button disabled>
                        {item.downloadSpeed !== 0
                          ? item.downloadSpeed
                          : "Downloaded"}
                      </button>
                    ) : (
                      <button disabled style={{ backgroundColor: "Red" }}>
                        {item.downloadSpeed !== 0
                          ? item.downloadSpeed
                          : "Failed"}
                      </button>
                    )}
                  </td>
                  <th>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => copy(item)}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACEElEQVRYheWWP0/bQBjGn3PcBJsYqE2gJAGkRpAI1ClUCrRdqrJChzLxDTpUgqUfoxvfgAWmDp2QurQSiD8jUoWEkAKpQKGGuCEmDrE7VDWk1Ofzn5SBRzrJr+W7+8nP+957wH0X+fvFy+ULy8P8HQON6a/zPWd+ATi/E5/0R5Dt5fJRPFh7vnz+8L8DdPDAQiEWGMI3AADEQoAIBBAGhKckfNxDIAu/mWWBICNf85smsKc2YTRxoAhkG7A0rhlbfFcgWmgAEwMRJOO3pvxTskig6tZO9DI6/fYFcaySwBY46dkwj16R5I0OY23pi+VoCxVA16qolFV7NOoGMwDPAZND7hBUgPLhCYq7+/aoaVVmAFYInrbA0HgGQMaOuxMRTwA3IdaLV/lTy/gEYIoZoHx4DF27sOOxziQQl5g23jxqtsQRQgBYk7cAmVbzoVLFZPqOCpAYfNQSi13eLQgEUNzdR6Ws2vHIq1Ek4woA4NvRT3zc+O66QTYt4XUh6Q8gMdiP7r7rxBW74vZzShEwS1n4jySR7nLbciCXZktWlyo4abGgNjAKKDEAQOmHTrUg9yYbHIB2DuTSEvMmvgFoKqk6tvbcb2IpRcDTEecO3bZmxCrffyAlC0gVhPABPs93Ojb8ma36CizMAe7nwPswkpAm1nOgbQCSwDPXOk13noR3DuDJAsvkPhCYq+2CuZ/6BYJLp4+CFBSrAAAAAElFTkSuQmCC"
                        alt=""
                      />
                    </span>
                  </th>
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
    </>
  );
};

export default Enteries;
