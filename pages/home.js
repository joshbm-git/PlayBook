export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
        
      </section>
    `;
  }
}
