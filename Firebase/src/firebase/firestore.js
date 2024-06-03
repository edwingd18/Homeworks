import { db } from './config';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useState } from 'react';

const useCollection = (table) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getAll = async (condition) => {
    setResults([]);
    let resDoc = null, q = null;
    if (condition && condition.length === 3) {
      q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
    } else {
      q = query(collection(db, table));
    }
    resDoc = await getDocs(q);

    resDoc.forEach(doc => {
      setResults(list => [...list, { ...doc.data(), id: doc.id }]);
    });
  };

  // add a new document
  const add = async (doc) => {
    setError(null);
    setIsPending(true);

    try {
      let resDoc = await addDoc(collection(db, table), doc);
      console.log('document ID: ' + resDoc.id);
      setIsPending(false);
      return resDoc;
    } catch (err) {
      console.log(err.message);
      setError('could not send the message');
      setIsPending(false);
      return null;
    }
  };

  // update a document
  const update = async (id, newData) => {
    setError(null);
    setIsPending(true);

    try {
      await updateDoc(doc(db, table, id), newData);
      console.log('Document updated successfully');
      setIsPending(false);
    } catch (err) {
      console.error('Error updating document: ', err);
      setError('Could not update the document');
      setIsPending(false);
    }
  };

  // remove a document
  const remove = async (id) => {
    setError(null);
    setIsPending(true);

    try {
      await deleteDoc(doc(db, table, id));
      console.log('Document deleted successfully');
      setIsPending(false);
    } catch (err) {
      console.error('Error deleting document: ', err);
      setError('Could not delete the document');
      setIsPending(false);
    }
  };

  return { error, isPending, results, add, getAll, update, remove };
};

export default useCollection;
