import React, {useState} from 'react';

function LoginForm({toggle, setToggle}){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [formError, setFormError] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();

  // if statement if BOTH username and password was entered.
  if(!username.trim() || !password.trim()) {
    // sets the FormError state
    setFormError('Username and Password are required.');
  } else{
    // insert code for submitting to database
    console.log("Username: ", username);
    console.log("Password: ", password);

    setUsername('');
    setPassword('');
    setFormError('');
  }
};

function handleLogin(){

}

function onSwitchToSignup(){
    setToggle(false);
}
    
return (
    <div>

        {/* Div component that displays formError message if formError element is not NULL */}
        <div>
        {formError && <div style={{ color: 'red' }}>{formError}</div>}
        </div>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
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
    </form>
    </div>
    

    );
}

export default LoginForm;