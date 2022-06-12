import React from "react";
import FileMesh from "../../service/FileMesh";

const Enteries = ({ search, list }) => {
  const download = (item) => {
    FileMesh.Download(item).then(() => alert("File is downloading!"));
  };

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
                <td data-label="Name">{item.name.name}</td>
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
            <tr key={item.id}>
              <td data-label="Name">{item.name}</td>
              <td data-label="Size">{Math.ceil(item.size / 1000)} kb</td>
              <td data-label="">
                <button disabled>Downloaded</button>
              </td>
            </tr>
          ))
        ) : (
          <p style={{ padding: "1em", color: "red" }}> Upload a File!</p>
        )}{" "}
      </tbody>
    </table>
  );
};

export default Enteries;
