class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <table>
          <tr>
            <td colspan="2">
              <br />
              <p>Copyright &#169; Jay He. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      `;
    }
  }
  
customElements.define('footer-component', Footer);
