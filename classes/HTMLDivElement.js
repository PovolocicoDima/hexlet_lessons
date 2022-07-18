/* eslint-disable class-methods-use-this */

import HTMLPairElement from './HTMLPairElement.js';

// BEGIN (write your solution here)
class HTMLDivElement extends HTMLPairElement {
    getTagName() {
        return 'div';
    }
}
// END
export default HTMLDivElement;

const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
div.setTextContent('test')
console.log(div.toString());
