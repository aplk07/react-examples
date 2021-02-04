import React, { useState } from "react";

import "./fileUpload.css";

const ImageUpload = () => {
  const [fileUpload, setFileUpload] = useState({
    file: "",
    imagePreviewUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", fileUpload.file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFileUpload({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="previewComponent">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="fileInput"
          type="file"
          id="fileInput"
          onChange={(e) => handleImageChange(e)}
        />
        <label
          className="submitButton"
          type="submit"
          for="fileInput"
          onClick={(e) => handleSubmit(e)}
        >
          Upload Image
        </label>
      </form>
      <div className="imgPreview">
        <img src={fileUpload.imagePreviewUrl} alt="NoFiles" />
      </div>
    </div>
  );
};

export default ImageUpload;
