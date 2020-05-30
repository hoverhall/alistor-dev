// eslint-disable-next-line
import React from 'react';
import userLogo from './resources/images/User.png'
// import Input from './TemplateComponents/Input'

export default {
    header: {
        menuItems: [
            {item: "Данные о складе", link: "info"},
            {item: "Добавить товар", link: "add"},
            {item: "Списать товар", link: "remove"},
            {item: "Работа со складом", link: "edit"},
            {item: "Работа со категориями", link: "cath"}
        ],
        user: {
            firstName: "John",
            lastName: "Doe",
            img: userLogo
        }
    },
    storageInfo: {
        inputs: [
            {placeHolder: "Адрес", color: "#cccccc"},
            {placeHolder: "Площадь", color: "#cccccc"},
            {placeHolder: "Стоимость удержания", color: "#cccccc"},
        ],
        button: {
            text: "Сохранить",
            onClick: () => {},
            link: "",
        },
        info: {
            text: "Колличество товара на складе: ",
            value: "145"
        }
    }
}