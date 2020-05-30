import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/Header.css'

import config from '../config'
// eslint-disable-next-line
import Input from '../TemplateComponents/Input'
// eslint-disable-next-line
import Slider from '../TemplateComponents/SliderButton'

// images
import logo from '../resources/images/Logo_header.png';


export default class extends Component {
    constructor (props) {
        super(props)

        this.setCurrent = this.setCurrent.bind(this)
        this.state = {
            burgerMenu: false
        }
    }

    setCurrent (item) {
        this.setState({})
    }

    render () {
        return (
            <>
            <header>
                <Link to="/" className="logo" onClick={this.setCurrent}>
                    <img src={logo} alt="logo" className="logo-image"/>
                    <span className="logo-name">Alistor</span>
                </Link>
                <div className="menu-line">
                    <ul className="menu">
                        {config.header.menuItems.map((item, index) => (
                            <Link className={
                                window.location.href.includes(item.link) ? "item-active" : "menu-item"
                            } key={index} to={item.link} onClick={this.setCurrent.bind(this, item.link)}>{item.item}</Link>
                        ))}
                    </ul>
                </div>
                <div className="user">
                    <div className="user-info">
                        <span className="user-name">Hi, {
                            config.header.user.firstName
                        } {config.header.user.lastName}</span>
                        <img src={config.header.user.img} alt="user-logo" className="user-logo"></img>
                    </div>
                    <div className="page-style">
                        <span className="page-style-text">Изменит режим</span>
                        <Slider className="page-style-slider" />
                    </div>
                </div>
            </header>
            </>
        )
    }
}