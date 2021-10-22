import React from 'react'
import './LoginHeader.css'
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
function LoginHeader() {
    return (
        <div className="login_header">
            <div className="banner">
                <h1>Linked</h1>
                <img alt="LinkedIN logo" className="logo" src="https://drive.google.com/uc?export=download&id=1vMGGgPFj3XUezKJiGyz3JeN3ZP3JZr8c" />
            </div>
            <div className="login_buttons">
                <button className="signIn_button">Sign in</button>
            </div>
        </div>
    )
}

export default LoginHeader
