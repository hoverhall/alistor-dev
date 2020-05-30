import React, { Component } from 'react';
import Input from '../TemplateComponents/Input';
import Button from '../TemplateComponents/Button';
import image from '../resources/images/stuff.png';
import config from '../config'
import './css/StorageInfo.css';

export default class extends Component {
    render () {
        return (
            <>
                <div className="storage-info">
                    <div className="input-fields">
                        {/* <div> */}
                        {config.storageInfo.inputs.map((item, index) => (
                            <div key={index}><Input className="input-field" placeHolder={item.placeHolder} color={item.color}/></div>
                        ))}
                        {/* </div> */}
                        <span className="storage-info-span">{`${config.storageInfo.info.text} ${config.storageInfo.info.value}`}</span>
                        <Button className="storage-button" 
                                text={config.storageInfo.button.text}
                                link={config.storageInfo.button.link}
                                onClick={config.storageInfo.button.onClick}
                                style={{
                            // backgroundColor: "#284FA7",
                            color: "#cccccc"
                        }}/>
                    </div>
                    <img className="storage-image" src={image} alt="" />
                </div>
                {/* <Input placeHolder="Name" color="#424242"/> */}
            </>
        )
    }
}