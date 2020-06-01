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
            <img src="images/sample-profilepicture2.jpg" class="profilePicture" alt="Playbook Profile Picture">
              <a href="#myProfile" class="gradientButtonBlue">Subscribe</a>
              <a href="#myProfile" class="strokedButton">Message</a>
              <a href="#myProfile" class="strokedButton">Share</a>
            </section>

            <section class="profileInformation">
            <nav>
            <ul>
            <li class="active">About</li>
            <li>Workouts</li>
            <li>Insights</li>
            </ul>
            </nav>

            <section class="about">
            <h2>Trailer</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J6_bL-nUeAo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>Story</h2>
            <h3>A brief intro</h3>
            <p>Magnus Lygdback is a world-renowned Swedish health and wellness expert, entrepreneur, and life coach. For over 18 years, he has become best known for working with some of the world's most recognizable actors, musicians, athletes, artists and high-performance business entrepreneurs.<br><br>Throughout his career, Magnus has developed the "Magnus Method", a training philosophy that embraces the "ethos of an athlete" - approaching life fitness with the same specific intensity and structure that an athlete would, whilst also maintaining a balanced and healthy life. Magnus' long list of clients includes Avicii, Max Martin, Alexander Skarsgård, Swedish House Mafia, Britney Spears, Mike Posner, Ben Affleck, Gal Gadot, Katy Perry, Lukas Graham, Harry Styles and Alicia Vikander to name a few.</p>
            <h2>Goals</h2>
            <h3>What I want us to accomplish</h3>
            <p>Build muscle and aesthetics while toning up!</p>
            <h2>Accomplishments</h2>
            <h3>My certificates, accomplishments, etc.</h3>
            <p>Certified trainer</p>
            <h2>Requirements</h2>
            <h3>What you need to train with me</h3>
            <p>Gym membership</p>
            <h2>Social Media</h2>
            <p>Follow me on Instagram and remember to tag me in your pictures!</p>
            <a href="https://www.instagram.com/magnuslygdback" target="_BLANK" class="gradientButtonBlue">Open Instagram</a>
            <h2>Want to know more?</h2>
            <p>Feel free to message me and i'll do my best to get back to you.</p>
            <a href="#creator" class="gradientButtonBlue">Send message</a>
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