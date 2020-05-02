import React, { Component } from 'react';
import Input from '../TemplateComponents/Input';

export default class extends Component {
    render () {
        return (
            <>
                <Input placeHolder="Name" type="email" color="#424242"/>
            </>
        )
    }
}