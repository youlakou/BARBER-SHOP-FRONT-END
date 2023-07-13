import React, { useState } from 'react';
import { useEffect } from 'react';

function UploadFile({ filePath, setFilePath }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(()=>{
    handleUpload();
  },[selectedFile]);

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Make an API call to upload the file
      fetch('http://127.0.0.1:8000/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // Update the file path in the state
          setFilePath(data.file_path);
        })
        .catch(error => {
          console.error(error); // Handle any errors
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>File Path: {filePath}</p>
    </div>
  );
}

export default UploadFile;
