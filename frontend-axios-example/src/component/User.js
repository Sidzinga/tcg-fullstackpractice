import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState({ name: "", surname: "", email: "" });


    const getUsers = async () => {
        try {
            const users = await axios.get("http://localhost:4000/user")
            setUsers(users.data);
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getUsers()
    }, [])

    const handleSubmit = async () => {
        try{
            console.log(userDetails);
            await axios.post("http://localhost:4000/user", userDetails)
            getUsers()
        }catch(e){
            console.log(e);
        }
    }
    const handleChange = (e) => {
        setUserDetails({...userDetails , [e.target.name] : e.target.value})
    }

    return (
        <div style={{ marginTop: "3rem" }} className="App">
            User
            <div>
                <input onChange={(e) => handleChange(e)} value={userDetails.email} name="email" placeholder="email" />
                <input onChange={(e) => handleChange(e)} value={userDetails.name} name="name" placeholder="name" />
                <input onChange={(e) => handleChange(e)} value={userDetails.surname} name="surname" placeholder="surname" />
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            {users.map(user => <div>  email {user.email}  name {user.name} surname {user.surname} </div>)}
        </div>
    );
}

export default User;
