
import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../firebase";

function Login() {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //Succesfully created new user
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        
        <div>
        <div className="container marketing">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">

         <div>
                <h1 className="display-4">Sign-in</h1>

                <input type="hidden" name="_next" value="#"/>
                <input type="hidden" name="_subject" value="New submission!"/>

                <form role="form" action="#todo" method="POST">
                    <div className="form-group">
                        <label for="InputName">Email</label>
                        <input type='text' className="form-control" placeholder="Enter your email" required="" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label for="InputName">Passsword</label>
                        <input type='password'  className="form-control" placeholder="Enter your password" required="" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type='submit' className="btn btn-info pull-right" onClick={signIn} >Sign In</button>
                </form>
                <hr className="hidden-lg"/>
                <p>
                    By signing in you agree to the terms of use for Snacc.io's simple recipe website
                </p>


            </div>
        </div>


        <hr className="hidden-lg"/>


        <div className="container">
            <p>Note to TAs: Authentification is handled via firebase (Google auth) as we did not wish to store sensitive data like passwords in our database. </p>

        </div>
    </div>
    </div>     
    </div>
    )
}

export default Login