import React, {useState} from 'react';

function LoginForm({toggle, setToggle}){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

function handleLogin(){

}

function onSwitchToSignup(){
    setToggle(false);
}
    
return (
    <div>
        <h2>Login</h2>

        <div>
        <label htmlFor="username">Username: </label>
        <input
            type="text"
            id="username"
            placeHolder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="password">Password: </label>
        <input
            type="password"
            id="password"
            value={password}
            placeHolder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button onClick={handleLogin}>Login</button><br/>
        <button onClick={onSwitchToSignup}>Switch to Signup</button>
    </div>

    );
}

export default LoginForm;