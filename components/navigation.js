class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav id="desktop-nav">
    <div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="research.html">Research</a></li>
        <li><a href="publications.html">Publications</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="hobbies.html">Hobbies</a></li>
      </ul>
    </div>
    </nav>
    `;
  }
}

customElements.define('navigation-component', Navigation);
