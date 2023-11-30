import { colorButtons } from "./js/modules/colorButtons.js";

const app = {
    init: function () {
        colorButtons.init();
    }
};

document.addEventListener('DOMContentLoaded', app.init);