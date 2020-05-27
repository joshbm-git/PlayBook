export default class CreatorPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="creator" class="page">
        <div class="profileWrapper">
        <h2>Magnus Lygdback</h2>
          <div class="profileFlexWrapper">
            <section class="profileMetadata">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture" alt="Playbook Profile Picture">
              <a href="#myProfile" class="gradientButtonBlue">Subscribe</a>
              <a href="#myProfile" class="strokedButton">Message</a>
              <a href="#myProfile" class="strokedButton">Share</a>
            </section>
            
            <section class="profileInformation">
            <nav>
            <ul>
            <li>About</li>
            <li class="active">Workouts</li>
            <li>Insights</li>
            </ul>
            </nav>

            <section class="right-content about">
            
            </section>

            <section class="right-content workouts">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            </section>
    
            <section class="right-content insights">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            </section>
    
            </section>
          </div>
      </div>
        </section>
      `;
  }
}
