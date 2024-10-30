class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <table>
          <tr>
            <td colspan="2" width="1000">
              <br />
              <hr>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <p align="center">Copyright &#169; Jay He. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      `;
    }
  }
  
customElements.define('footer-component', Footer);
