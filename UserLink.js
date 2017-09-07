export default class XUserLink extends HTMLElement {
    constructor() {
        super();

        console.log('x-user-link')

        this.onload();
    }

    async onload() {
        const name = this.getAttribute('name');
        const el = document.createElement('a');
        el.setAttribute('href', `/users/${name}`);
        el.innerText = name;
        var shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(el);
    }
}

// Define the new element
customElements.define('x-user-link', XUserLink);