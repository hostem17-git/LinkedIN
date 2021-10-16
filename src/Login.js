import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <div className="input_buttons">
                <h1 className="welcome_text">Welcome to My Linked Clone!</h1>

                <div className="input_container">
                    <label for="name">Name</label>
                    <input type="text" name="name" ></input>
                </div>

                <div className="input_container">
                    <label for="">Description</label>
                    <input type="text" ></input>
                </div>

                <button class="submit">Sign in</button>
            </div>
            <div className="hero_image">
            </div>
        </div>
    )
}

export default Login
