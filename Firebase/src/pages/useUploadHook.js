import { useState } from "react";
import { getAll, upload } from "../firebase/firestore";
import { getDownloadURL } from "firebase/storage";

export const useUploadHook = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const uploadTask = upload(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setFiles((prevFiles) => [...prevFiles, url]);
      }
    );
  };

  const handleGetAll = async () => {
    const { items } = await getAll();
    const urls = await Promise.all(items.map(itemRef => getDownloadURL(itemRef)));
    setFiles(urls);
  };

  return [files, percent, handleChange, handleUpload, handleGetAll, setFiles];
};
