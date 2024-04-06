import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
// import {Context} from '../App';

function LoginForm({toggle, setToggle}){
// const { loggedIn, setLoggedIn } = useContext(Context);

const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [formError, setFormError] = useState('');
const [authenticated, setAuthenticated] = useState(false)

const handleSubmit = (event) => {
  event.preventDefault();

  // if statement if BOTH username and password was entered.
  if(!username.trim() || !password.trim()) {
    // sets the FormError state
    setFormError('Username and Password are required.');
  } else{
    // DEBUG insert code for submitting to database
    console.log("Username: ", username);
    console.log("Password: ", password);

    fetch('http://127.0.0.1:5000/authenticate', {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({'username':username, 'password':password}),
    })
    .then(response => response.json())
    .then(response => {
      setAuthenticated(response.authenticated)
      setFormError(response.message)
    })
    .catch(error => {
      alert('Authentication failed. Incorrect username or passsword.');
      console.log(error);
    });
  }
    setUsername('');
    setPassword('');
    // setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
    navigate('/products');
    // SHOULD : Nagivate to Products when SUCCESSFULLY LOGGED IN
};

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
        <button type="submit">Login</button>
        <br/>
        <button onClick={onSwitchToSignup}>Switch to Signup</button>
    </form>

    <button onClick={()=>localStorage.setItem('loggedIn', 'false')}>Logout</button>
    </div>
    

    );
}

export default LoginForm;