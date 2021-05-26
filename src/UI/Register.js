import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../firebase";


function Register() {

    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



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
                <h1 className="display-4">Create an account</h1>

                <input type="hidden" name="_next" value="#"/>
                <input type="hidden" name="_subject" value="New submission!"/>

                <form role="form" action="#todo" method="POST">
                    <div className="form-group">
                        <label for="InputName">Username</label>
                        <input type='text' className="form-control" placeholder="Enter the username you whish to use" required=""/>
                    </div>
                    <div className="form-group">
                        <label for="InputName">Email</label>
                        <input type='text' className="form-control" placeholder="Enter your email" required="" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label for="InputName">Passsword</label>
                        <input type='password'  className="form-control" placeholder="Enter your password" required="" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type='submit' className="btn btn-info pull-right" onClick={register} >Register</button>
                </form>
                <hr className="hidden-lg"/>
                <p>
                    By creating an account in you agree to the terms of use for Snacc.io's simple recipe website
                </p>


            </div>
        </div>


        <hr className="hidden-lg"/>


        <div className="container">
            <p>Note to TAs: Authentification is handled via firebase (Google auth) as we did not wish to store sensitive data like passwords in our database.  </p>
            <p>Password and email is passed to firebase auth. All data except for password is posted to the database. userID is automatically generated.</p>
        </div>
    </div>
    </div>     
    </div>
    )
}

export default Register
