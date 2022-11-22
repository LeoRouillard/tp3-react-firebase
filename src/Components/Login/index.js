import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

//import { auth } from '../../firebase_config';

export default function Login() {
    const navigate = useNavigate();

  //  const [username, setUsername] = useState(null);
  //  const [password, setPassword] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
        //    const response = await signInWithEmailAndPassword(auth, username, password);
            //const token = response.user.accessToken;
            navigate('/hack')
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    function handleChangeUsername(event) {
        setUsername(event.target.value);
    }

    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label className="input">
                Username:
                <input type="text" name="username" onChange={handleChangeUsername}/>
            </label>
            </div>
            <div>
            <label className="input">
                Mot de passe:
                <input type="password" name="password" onChange={handleChangePassword}/>
            </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}