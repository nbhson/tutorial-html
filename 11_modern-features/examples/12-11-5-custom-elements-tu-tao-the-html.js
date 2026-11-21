// Định nghĩa custom element <count-up>
class CountUp extends HTMLElement {
  connectedCallback() {
    this.count = 0;
    this.innerHTML = `<button type="button">Bấm: ${this.count}</button>`;
    this.querySelector('button').addEventListener('click', () => {
      this.count++;
      this.querySelector('button').textContent = `Bấm: ${this.count}`;
    });
  }
}

customElements.define('count-up', CountUp);
