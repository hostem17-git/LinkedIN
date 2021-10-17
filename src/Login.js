import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Login.css"
import Lottie from 'react-lottie'
import animationData from './lottie/working-handsome-man.json'
import { auth } from './firebase';
import { login } from "./features/userSlice"

function Login() {


    const [name, setname] = useState("");
    const [description, setdescription] = useState("")
    const [mail, setmail] = useState("")
    const [profilePic, setprofilePic] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const loginToApp = (e) => {
        e.preventDefault();
    }

    const register = () => {
        if (!name)
            return alert("Please enter your name");
    }

    return (
        <div className="login">
            <div className="input_buttons">
                <h1 className="welcome_text">Welcome to My Linked Clone!</h1>

                <div className="input_container">
                    <label for="name">Name</label>
                    <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" name="name" ></input>
                </div>

                <div className="input_container">
                    <label for="name">Profile Pic Url(Optional)</label>
                    <input value={profilePic} onChange={(e) => { setprofilePic(e.target.value) }} type="text" name="name" ></input>
                </div>

                <div className="input_container">
                    <label for="name">Email</label>
                    <input value={mail} onChange={(e) => { setmail(e.target.value) }} type="text" name="name" ></input>
                </div>
                <div className="input_container">
                    <label for="">Password</label>
                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="text" ></input>
                </div>

                <button class="submit" onClick={loginToApp}>Sign in</button>

                <div className="register_message">
                    <p>Not a Member? <span onClick={register} className="register_link">Register Now!</span></p>
                </div>
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
