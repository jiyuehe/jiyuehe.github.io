class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <table>
          <tr>
            <td width="1000">
              <br />
              <hr>
            </td>
          </tr>

          <tr>
            <td>
              <p align="center">Copyright &#169; Jiyue He. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      `;
    }
  }
  
customElements.define('footer-component', Footer);
