import XUserLink from './Userlink.js';

export default class XUserList extends HTMLElement {
    constructor() {
        super();

        this.onload();
    }

    async onload() {
        const html = await (await fetch('UserList.html')).text();
        const doc = document.createElement( 'html' );
        doc.innerHTML = html;
        console.log('len=', doc.childNodes.length);
        const el = doc.childNodes[1].childNodes[0];
        var shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(el);
    }
}

// Define the new element
customElements.define('x-user-list', XUserList);