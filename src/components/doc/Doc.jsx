const Doc = () => {
  return (
    <div
      className="Container"
      style={{
        maxWidth: "50vw",
        maxHeight: "70vh",
        overflow: "auto",
        margin: "1em",
        textAlign: "justify",
      }}
    >
      <div style={{ padding: "1.4em" }}>
        <h1>File Mesh Upload</h1>
        <p>Parna Asadi - Morteza Bahjat - Kimia MohammadTaheri</p>
        <hr />
        <h4>Front Document</h4>
        <p>
          React Project was developed for Web-service of File Mesh program. This
          project contain 3 main parts.
        </p>
        <ol>
          <li>
            <h5>Upload</h5>
            <p>
              Left side of container is a drag-and-drop model of upload file
              with option of click-select.
            </p>
            <p>
              In code, in "components/upload" folder, You can find this
              component and there are some functions for implement drag-drop and
              "handleFiles" function would send file-bytes to the server.
            </p>
          </li>
          <li>
            <h5>Search</h5>
            <p>
              Up side of container is a search button, click on the right side
              of the icon would opens the searchbox input, After writing file
              name(or a part of it) it would send search term to the server and
              returns all macthed files.
            </p>
            <p>
              In code, in "component/search" folder, You can find this compoennt
              and it contains one main function for sending data to server and
              return results to container.
            </p>
          </li>
          <li>
            <h5>Enteries</h5>
            <p>
              Last Important part is User Enteries, It shows both result of
              search and user files. In this component there is a table with
              name, size of file and status of the file.
            </p>
            <p>
              In code, in "component/enteries" folder, you can see the
              component, this module has two main functions, download a file (
              with clicking on search results,you can download the desired file)
              and get updated list ( with a short interval ). when a file is on
              dowloading status, a little progress bar would appear under the
              file and shows how much of the data was recieved on userside. Also
              added a "Copy" icon to copy the path of downloaded file.
            </p>
          </li>
        </ol>
        <h4>Extra files</h4>
        <p>
          there are some extra folders in "components" like doc and docBtn,
          there are for this container.
        </p>
        <p>
          "service" folder is a core for web-service APIs which connect the
          Front-end to the server with "fetch".
        </p>
      </div>
    </div>
  );
};

export default Doc;
