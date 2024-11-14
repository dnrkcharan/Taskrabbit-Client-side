import React, { useState } from "react";

export function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    

    const handleSubmit ={
        //hit the login api
    }

    return (
        <div>
        <h1>Welcome to TaskRabbit</h1>
        <h3>Please Signup with you credentials</h3>
        <tbody>Username </tbody>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <tbody>Password </tbody>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button type="submit" onSubmit={handleSubmit}> Signup </button>
        </div>
    )
}

