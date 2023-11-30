import {colorList} from "../colorList.js";

export const colorButtons = {
    init: function () {
        const buttonsListElement = document.querySelector('#buttons_list');

        colorList.forEach(function (color) {
            const buttonElement = document.createElement('button');
            buttonElement.style.backgroundColor = color.colorCode;
            buttonElement.textContent = color.colorName;
            buttonElement.dataset.color = color.colorCode;
            buttonsListElement.append(buttonElement);
        });

        colorButtons.buttons = document.querySelectorAll('#buttons_list button');

        colorButtons.addEvents();
    },

    addEvents: function (event) {
        const buttons = document.querySelectorAll('#buttons_list button');
        // console.log(buttons);
        buttons.forEach(function (button) {
            button.addEventListener('click', colorButtons.handleButtonClick);
        });
    },

    handleButtonClick: function (event) {
        const buttonClickedElement = event.currentTarget;
        document.querySelector('body').style.backgroundColor = buttonClickedElement.dataset.color;
    }
};