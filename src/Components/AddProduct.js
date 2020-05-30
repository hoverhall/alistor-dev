import React, { Component } from 'react';
import Input from '../TemplateComponents/Input'
import addImagePhoto from '../resources/images/camera.png'
import './css/AddProduct.css'

export default class extends Component {
    render () {
        return (
            <>
                <div className="add-product input-container">
                    <div className="add-image-container">
                        <div className="add-image">
                            <img src={addImagePhoto} alt="add-imgage" />
                        </div>
                        <span>Добавить фото</span>
                    </div>
                    <div className="add-product-name input-container">
                        <Input className="add-product-input" placeHolder="Название" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Стоимость за штуку" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                    </div>
                    <div className="add-cath-name input-container">
                        <Input className="add-product-input" placeHolder="Категория" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                    </div>
                    <div className="add-count-name input-container">
                        <Input className="add-product-input" placeHolder="Колличество" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                        <Input className="add-product-input" placeHolder="Артикул/Серийник" color="#cccccc"/>
                    </div>
                </div>
            </>
        )
    }
}