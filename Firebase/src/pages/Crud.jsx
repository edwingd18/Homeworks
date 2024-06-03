import React, { useState, useEffect } from 'react';
import useCollection from '../firebase/firestore';
import './Crud.css';

export const Crud = () => {
  const [user, setUser] = useState({ name: '' });
  const [editUser, setEditUser] = useState({ id: '', name: '' });
  const { add, getAll, update, remove, results } = useCollection('users');

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
    <div className='card'>
      <h1 className='xd'>CRUD</h1>
      <input className="hola" type="text" onChange={handleSetUser} value={user.name} />
      <button className='Guardar' type="button" onClick={save}>Guardar</button>
      <ul className='list'>
        {results.map(item => {
          return (
            <li className='item' key={item.id}>
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
                  <div className="buttons">
                    <button className='Editar' onClick={() => handleEdit(item.id, item.name)}>Editar</button>
                    <button className='Eliminar' onClick={() => handleRemove(item.id)}>Eliminar</button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
