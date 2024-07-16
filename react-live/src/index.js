import _ from "lodash";
import _ from "bootstrap";

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','Webpack'], ' ');
    return element;
}

document.body.appendChild(component());