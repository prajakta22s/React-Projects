import React, { useState } from 'react';

const ImageFileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    } else {
      // Handle the case where the user canceled the file selection
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt='uploaded' />}
    </div>
  );
};

export default ImageFileUpload;
