// delete.js
import { ref, deleteObject } from 'firebase/storage';
import { firebaseStorage } from './config'; // Asegúrate de que la ruta sea correcta

export const deleteFile = async (fileUrl) => {
  try {
    const fileRef = ref(firebaseStorage, fileUrl);
    await deleteObject(fileRef);
    console.log('Archivo eliminado correctamente', fileRef);
  } catch (error) {
    console.error('Error al eliminar el archivo:', error);
    throw error;
  }
};
