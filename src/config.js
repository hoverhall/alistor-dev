// eslint-disable-next-line
import React from 'react';
import userLogo from './resources/images/User.png'

export default {
    header: {
        menuItems: [
            {item: "Данные о складе", link: "info"},
            {item: "Добавить товар", link: "add"},
            {item: "Списать товар", link: "remove"},
            {item: "Работа со складом", link: "edit"}
        ],
        user: {
            firstName: "John",
            lastName: "Doe",
            img: userLogo
        }
    }
}