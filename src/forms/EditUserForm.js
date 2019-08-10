import React, {useState, useEffect} from 'react';

const EditUserForm = props => {

    const [user, setUser] = useState(props.currentUser)

    const handleChange = e => {
        const { name, value } = e.target
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form
        onSubmit={e => {
            e.preventDefault()
            if(!user.name || !user.username) return

            props.updateUser(user.id, user)
        }}
        >
            <label>Name</label>
            <input onChange={handleChange} type="text" name="name" value={user.name}/>
            <label>Username</label>
            <input onChange={handleChange} type="text" name="username" value={user.username}/>
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditUserForm
