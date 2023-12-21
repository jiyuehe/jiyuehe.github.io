class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer style="text-align: center">
      <p>Copyright &#169; Jiyue He. All Rights Reserved.</p>
      </footer>
      <br>
      `;
    }
  }
  
customElements.define('footer-component', Footer);
