class Icon extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <svg>
        <use xlink:href="${this.getAttribute('href')}" />
      </svg>
    `
  }
}

function register() {
  customElements.define('c-icon', Icon)
}

export default { register }
