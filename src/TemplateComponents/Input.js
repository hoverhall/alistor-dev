import React from 'react';
import './css/Input.css'

export default (props) => (
    <div className={props.className}>
        <div className="cool-input" style={{color: props.color, borderBottom: `1px solid ${props.color}`}}>
            <input className="cool-input__input" style={{color: props.color}} type={props.type} required/>
            <span className="cool-input__placeholder" style={{color: props.color}}>{props.placeHolder}</span>
        </div>
    </div>
)