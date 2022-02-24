import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    console.log('came from', location.state?.from)

    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Your Email..' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-jhon website? <Link to='/register'>Create New Account</Link></p>
                <div>-----------or------------</div>
                <button 
                    className='btn-regular'
                    onClick={handleGoogleLogIn}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;