class MyCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; border: 1px solid #ddd; border-radius: 8px; padding: 12px; }
        ::slotted(h3) { margin: 0 0 8px; }
      </style>
      <slot name="title"></slot>
      <slot></slot>
    `;
  }
}
customElements.define('my-card', MyCard);
