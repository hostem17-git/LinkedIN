import React from 'react'
import "./Login.css"
import Lottie from 'react-lottie'
import animationData from './lottie/working-handsome-man.json'

function Login() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

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
                <Lottie
                    options={defaultOptions}
                    height={800}
                    width={800}
                />
            </div>

        </div>
    )
}

export default Login
