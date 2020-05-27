export default class CreatorPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="creator" class="page">
        <h2>Magnus Lygdback</h2>
        <section class="grid">
        <article class="left">
        <article>
        <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg">
        <div class="button-wrapper">
        <div class="btn-round">Subscribe</div>
        <div class="btn-square"><i class="fab fa-facebook-messenger"></i> <p>Message</p></div>
        <div class="btn-square"><i class="fab fa-instagram"></i><p>Share</p></div>
        </div>
        </article>
        </article>

        <article class="right">
        <nav>
        <ul>
        <li>About</li>
        <li class="active">Workouts</li>
        <li>Insights</li>
        </ul>
        </nav>

        <section class="right-content workouts">
        <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg">
        <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg">
        <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg">
        <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg">
        <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg">
        </section>

        
        </article>
        </section>
        </section>
      `;
  }
}
