import React, {useState} from 'react';


const AddUserForm = props => {

    const initialFormState = {id: null, name:'', username: ''}
    const [user, setUser] = useState(initialFormState)

    const handleChange = e => {
        const { name, value } = e.target
        setUser({...user, [name]: value})
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if(!user.name || !user.username) return

                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>Name</label>
            <input onChange={handleChange} type="text" name="name" value={user.name}/>
            <label>Username</label>
            <input  onChange={handleChange} type="text" name="username" value={user.username}/>
            <button>Add new user</button>
        </form>
    )
}





export default AddUserForm
