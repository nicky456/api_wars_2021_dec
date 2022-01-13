import React from "react";
import { useState } from "react";


function LogIn(){
    return(
        <div className="log">
            <h3>Login:</h3>
            <form className="loginForm">
                <label>
                    Username: 
                    <input type="text" name="email" placeholder="Your username" />
                </label>
                <label>
                    Password: 
                    <input type="password" name="password" placeholder="Your Password"/>
                </label>
                <input type="submit" value="Log In" />
                
                <a href="http://localhost:8000/google" className="ggle-link">
                    <h4>Or sign in with Google</h4>
                    <img className="google" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt=""/>
                </a>
            </form>
            
        </div>
    )
}

export default LogIn;