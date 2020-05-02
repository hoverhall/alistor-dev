import React from 'react';
import './css/Button.css'
import { Link } from 'react-router-dom';

export default (props) => (
    <>
        <Link className="btn-link" to={props.link} onClick={props.onClick}>
            <button className="btn" style={props.style}>{props.text}</button>
        </Link>
    </>
)