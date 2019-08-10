import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
    // view users
    const userData = [
        {id: 1, name: 'Andy', username: 'Cyclops'},
        {id: 2, name: 'Luis', username: 'Wolverine'},
        {id: 3, name: 'Jeffrey', username: 'Iceman'}
    ]
    // adding users

    const [users, setUsers] = useState(userData)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    // editing users

    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, name: '', username: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = user => {
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => user.id === id ? updatedUser : user))
    }

    //delete users

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div className="container">
            <h1>CRUD App with React Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser}/>
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default App;
