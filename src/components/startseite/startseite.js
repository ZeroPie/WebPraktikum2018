export function init() {
  return `Startseite`;
}

window.customElements.define('file-bag', class extends HTMLElement {
  constructor() {
    super();
    var shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<strong>Shadow dom super powers for the win!</strong>`;
  }
});
