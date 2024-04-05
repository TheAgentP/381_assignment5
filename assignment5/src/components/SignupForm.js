import React, {useState} from 'react';

function SignupForm({toggle, setToggle}){

const [username, setUsername] = useState('defaultUsername');
const [password, setPassword] = useState('defaultPassword');

const [formData, setFormData] = useState({
    username:'',
    password:'',
    confirmPassword:'',
    email:''
});

function onSwitchToLogin(){
    setToggle(true);
}

function handleSignUp(){

}

function handleChange(){

}

function handleSubmit(){

}

return (
    <div>
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input 
                type="text"
                id="username"
                name="username"
                placeholder='Enter your username'
                value={formData.username}
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                type="password"
                id="password"
                name="password"
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input 
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder='Confirm your password'
                value={formData.confirmPassword}
                onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange} 
                />
            </div>
            <button onClick={handleSignUp}>Sign-Up</button><br/>
            <button onClick={onSwitchToLogin}>Switch to Login</button>
        </form>
    </div>
    );
}

export default SignupForm;