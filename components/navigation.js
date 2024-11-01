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
              <a href="research.html">Research summary</a>
                <a href="atrial_fibrillation_challenges.html">Atrial fibrillation ablation challenges</a>
                <a href="fiber_effect.html">Myocardial fiber effects on arrhythmia activation patterns</a>
                <a href="patient_specific_heart_modeling.html">Patient-specific heart modeling for arrhythmia ablation</a>
                <a href="clinical_data_processing_and_arrhythmia_detection.html">Clinical data processing and arrhythmia source detection</a>
              </div>
            </div> 

            <a href="publications.html">Publications</a>
          </div>
        </td>
      </tr>
    </table>
    `;
  }
}

customElements.define('navigation-component', Navigation);
