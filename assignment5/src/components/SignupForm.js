import React, {useState} from 'react';

function SignupForm({toggle, setToggle}){
const [formError, setFormError] = useState('');
const [formData, setFormData] = useState({
    username:'',
    password:'',
    confirmPassword:'',
    email:''
});

function onSwitchToLogin(){
    setToggle(true);
}

const resetFormData = () => {
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    });
  };

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    // NEED: another check if USERNAME already exists by checking backend DataBase 'Username is already taken!' == formError
    if(!formData.username.trim() || !formData.password.trim() || !formData.confirmPassword.trim() || !formData.email.trim()){
        setFormError('All fields are required!');
    } else if (formData.password != formData.confirmPassword){
        setFormError('Pasword do not match!');
    } else {
        // insert the code to send data to Database
        setFormError('User signed up successfully!')
        
        // DEBUG statements
        console.log("Username: " ,formData.username);
        console.log("Password: ", formData.password);
        console.log("ConfirmPassword: ", formData.confirmPassword);
        console.log("Email: ", formData.email);
        resetFormData();
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the form state using setFormData function
    setFormData({
      ...formData, // Spread existing form data
      [name]: value // Update the value of the changed field
    });
  };

return (
    <div>
        {formError && <div style={{ color: 'red' }}>{formError}</div>}
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
                <input 
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange} 
                />
            </div>
            <button type="submit">Sign-Up</button><br/>
            <button onClick={onSwitchToLogin}>Switch to Login</button>
        </form>
    </div>
    );
}

export default SignupForm;