import { useEffect } from 'react';
import { useUploadHook } from './useUploadHook';
import { deleteFile } from '../firebase/delete';
import './Upload.css';

export const Upload = () => {
  const [files, percent, handleChange, handleUpload, handleGetAll, setFiles] = useUploadHook();

  useEffect(() => {
    handleGetAll();
  }, []);

  const handleDelete = (fileUrl) => {
    deleteFile(fileUrl)
      .then(() => {
        // Actualizar la lista de archivos después de eliminar
        setFiles((prevFiles) => prevFiles.filter((file) => file !== fileUrl));
      })
      .catch((error) => {
        console.error('Error al eliminar el archivo:', error);
      });
  };

  return (
    <div className="container">
      <div>
        <input type="file" onChange={handleChange} accept="" />
        <button onClick={handleUpload}>Upload to Firebase</button>
        <p>{percent} % done</p>
      </div>
      {files.map((item, key) => (
        <div key={key}>
          <img width="100px" src={item} alt="Uploaded file" />
          <button onClick={() => handleDelete(item)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};
