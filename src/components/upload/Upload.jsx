import React from "react";
import FileMesh from "../../service/FileMesh";

const Upload = () => {
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDrag(true);
    } else if (e.type === "dragleave") {
      setDrag(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();

    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file) => {
    FileMesh.Add(file).then(console.log);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form
      className="Upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={true}
        onChange={handleChange}
      />
      <label>
        <div>
          <p>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </p>
          <p>Drag and drop your file here </p>
          <p style={{ color: "gray" }}> or</p>
          <p>
            {" "}
            <button onClick={onButtonClick}>Upload a file</button>
          </p>
        </div>
      </label>
      {drag && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default Upload;
