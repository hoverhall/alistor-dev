import React from 'react'
import logo from '../resources/images/Alistor.png'
import Input from '../TemplateComponents/Input'
import Button from '../TemplateComponents/Button'
import './css/AuthPage.css'
// import background from '../resources/images/Login.png'

export default (props) => (
    <div className="auth-background">
        <div className="auth">
            <div className="logo-field">
                <img className="auth-image" src={logo} alt="" />
            </div>
            <div className="auth-field">
                <div className="auth-interface">
                    <span className="auth-text">LOGIN</span>
                    <Input className="auth-input" placeHolder="Login" color="#cccccc" />
                    <Input className="auth-input" placeHolder="Password" color="#cccccc" type="password" />
                    <Button className="auth-button" text="Log in" onClick={props.action} link="/" style={{
                        // backgroundColor: "#284FA7",
                        color: "#cccccc"
                    }}/>
                </div>
            </div>
        </div>
    </div>
)