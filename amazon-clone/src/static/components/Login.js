import React from 'react'
import "../css/Login.css"
import {Link} from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="login_signInButton"> Sign In</button>
                    <p>
                        By Signing-in you agree to the AMAZON-CLONE-APP Conditions Of Use & Sale. Please see our Privacy Notice & readme.md our cookies Notice and Our internet Based Ads Notice.
                    </p>
                    <button className="login_registerButton">Create Your Amazon Account</button>
                </form>
            </div>
        </div>

    )
}

export default Login
