class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
      <p>Copyright &#169; Jiyue He. All Rights Reserved.</p>
      </footer>
      `;
    }
  }
  
customElements.define('footer-component', Footer);
