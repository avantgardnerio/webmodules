// Create a class for the element
export default class XProduct extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      var shadow = this.attachShadow({mode: 'open'});
  
      // Create a standard img element and set it's attributes.
      var img = document.createElement('img');
      img.alt = this.getAttribute('data-name');
      img.src = this.getAttribute('data-img');
      img.width = '150';
      img.height = '150';
      img.className = 'product-img';
  
      // Add the image to the shadow root.
      shadow.appendChild(img);
  
      // Add an event listener to the image.
      img.addEventListener('click', () => {
        window.location = this.getAttribute('data-url');
      });
  
      // Create a link to the product.
      var link = document.createElement('a');
      link.innerText = this.getAttribute('data-name');
      link.href = this.getAttribute('data-url');
      link.className = 'product-name';
  
      // Add the link to the shadow root.
      shadow.appendChild(link);
    }
  }
  
  // Define the new element
  customElements.define('x-product', XProduct);