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
                <a href="clinical_processing_arrhythmia_detection.html">Algorithm Development: Clinical Data Processing and Arrhythmia Source Detection</a>
                <a href="patient_specific_heart_modeling.html">Modeling: Patient-specific Digital Heart for Arrhythmia Ablation</a>
                <a href="fiber_effect.html">Modeling: Myocardial Fiber Effects on Arrhythmia Patterns</a>
                <a href="egm_classification_anatomic_segment.html">Machine Learning: Electrogram Classification and Anatomical Segmentation</a>
                <a href="voltage_map_comparison.html">Algorithm Development: Voltage Map Comparison</a>
                <a href="signature_verification.html">Machine Learning: Handwritten Digital Signature Verification</a>
                <a href="micro_robot.html">Modeling: Electromagnetic Micro Robot</a>
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
