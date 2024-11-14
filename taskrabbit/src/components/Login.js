import React, { useState } from "react";
import axios from 'axios';

export function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        // if no username or password raise the error.
        e.preventDefault();
        try{
            const apiresponse = await axios.post(
                'http://127.0.0.1:8000/taskrabbit/login/',
                {
                    'username': username,
                    'password': password
                }
            );
            console.log('Login status', apiresponse.data)
        }
        catch{
            console.log('something went wrong')
        }
    }

    return (
        <div>
        <h1>Welcome to TaskRabbit</h1>
        <h3>Please Login with you credentials</h3>
        <tbody>Username </tbody>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <tbody>Password </tbody>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button type="submit" onSubmit={handleLogin}> Login </button>
        </div>
    )
}

