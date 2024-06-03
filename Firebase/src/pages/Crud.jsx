import React, { useState, useEffect } from 'react';
import useCollection from '../firebase/firestore';

export const Crud = () => {
  const [user, setUser] = useState({ name: '' });
  const [editUser, setEditUser] = useState({ id: '', name: '' });
  const { add, getAll, update, remove, isPending, results } = useCollection('users');

  const getAllDocs = async () => {
    await getAll([]);
  };

  const save = async () => {
    await add(user);
    setUser({ name: '' }); // Limpiar el input después de guardar
    await getAllDocs();
  };

  const handleUpdate = async () => {
    await update(editUser.id, { name: editUser.name });
    await getAllDocs();
    setEditUser({ id: '', name: '' }); // Limpiar los datos de edición
  };

  const handleRemove = async (id) => {
    await remove(id);
    await getAllDocs();
  };

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  const handleEdit = (id, name) => {
    setEditUser({ id, name });
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
      <input type="text" onChange={handleSetUser} value={user.name} />
      <button type="button" onClick={save}>Guardar</button>
      {isPending ? <span>Saving...</span> : ''}
      <ul>
        {results.map(item => {
          return (
            <li key={item.id}>
              {editUser.id === item.id ? (
                <>
                  <input
                    type="text"
                    value={editUser.name}
                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                  />
                  <button onClick={handleUpdate}>Guardar</button>
                </>
              ) : (
                <>
                  {item.name}
                  <button onClick={() => handleEdit(item.id, item.name)}>Editar</button>
                  <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
