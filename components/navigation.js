class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <table>
      <tr>
        <td>
          <img src="./assets/penn_logo.png" style="width: 100px;">
        </td>

        <td>
          <div class="navbar">
            <a href="index.html">Home</a>

            <div class="dropdown">
              <button class="dropbtn">Projects
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="clinical_data_processing_and_arrhythmia_detection.html">Clinical Data Processing and Arrhythmia Source Detection</a>
                <a href="patient_specific_heart_modeling.html">Model Patient-specific Heart for Arrhythmia Ablation</a>
                <a href="fiber_effect.html">Model Myocardial Fiber Effects on Arrhythmia Patterns</a>
              </div>
            </div> 

            <a href="publications.html">Publications</a>

            <a href="awards.html">Awards</a>
          </div>
        </td>
      </tr>
    </table>
    `;
  }
}

customElements.define('navigation-component', Navigation);
