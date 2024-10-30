
import { useState } from 'react';
import './App.css';
import AddUserForm from './forms/AddUserForm';
import UserTable from './tables/UserTable';
import EditUserForm from './forms/EditUserForm';

function App() {

  const UsersData = [
    // { id: 1, name: 'feno', username: 'fenolin' },
    // { id: 1, name: 'ashi', username: 'ashin' },
    // { id: 1, name: 'yazhu', username: 'yazhini' },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }
  const deleteUser = (id) =>
    //setUsers(users.id===id);
    setUsers(users.filter((user) => user.id !== id));

  const [users, setUsers] = useState(UsersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <div>
        <div>
          {editing ? (<div>
            <h2>Edit User</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>) : (<div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>
          )
          }

        </div>
        <div>
          <h2>View Users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
