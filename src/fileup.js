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

  let { imagePreviewUrl } = fileUpload;
  let imagePreview = <img src={imagePreviewUrl} alt="NoFiles" />;
  if (imagePreviewUrl) {
    imagePreview = <img src={imagePreviewUrl} alt="No" />;
  } else {
    imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }

  return (
    <div className="previewComponent">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
        <button
          className="submitButton"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Upload Image
        </button>
      </form>
      <div className="imgPreview">{imagePreview}</div>
    </div>
  );
};

export default ImageUpload;
