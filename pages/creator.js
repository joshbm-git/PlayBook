import playBookService from "../services/playbook.js";
export default class CreatorPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let playbooks = await playBookService.loadPlaybook();
    this.appendPlaybook(playbooks);
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `

    <section id="creator" class="page">
    <div class="profileWrapper">
      <h2>Magnus Lygdback</h2>
      <div class="profileFlexWrapper">
        <section class="profileMetadata">
          <img
            src="../images/magnus.jpg"
            class="profilePicture"
            alt="Playbook Profile Picture"
          />
          <a href="#myProfile" class="gradientButtonBlue">Subscribe</a>
          <a href="#myProfile" class="strokedButton">Message</a>
          <a href="#myProfile" class="strokedButton">Share</a>
        </section>
  
        <section class="profileInformation">
          <nav>
            <ul>
              <li onclick="collapseAbout()">About</li>
              <li onclick="collapseWorkout()">Workouts</li>
              <li onclick="collapseInsight()">Insights</li>
            </ul>
          </nav>
  
          <section class="hide right-content" id="contentAbout">
            <p>About</p>
            <h2>Trailer</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J6_bL-nUeAo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h2>Story</h2>
            <h3>A brief intro</h3>
            <p>
              Magnus Lygdback is a world-renowned Swedish health and wellness
              expert, entrepreneur, and life coach. For over 18 years, he has
              become best known for working with some of the world's most
              recognizable actors, musicians, athletes, artists and
              high-performance business entrepreneurs.<br /><br />Throughout his
              career, Magnus has developed the "Magnus Method", a training
              philosophy that embraces the "ethos of an athlete" - approaching
              life fitness with the same specific intensity and structure that an
              athlete would, whilst also maintaining a balanced and healthy life.
              Magnus' long list of clients includes Avicii, Max Martin, Alexander
              Skarsgård, Swedish House Mafia, Britney Spears, Mike Posner, Ben
              Affleck, Gal Gadot, Katy Perry, Lukas Graham, Harry Styles and
              Alicia Vikander to name a few.
            </p>
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
            <a
              href="https://www.instagram.com/magnuslygdback"
              target="_BLANK"
              class="gradientButtonBlue"
              >Open Instagram</a
            >
            <h2>Want to know more?</h2>
            <p>Feel free to message me and i'll do my best to get back to you.</p>
            <a href="#creator" class="gradientButtonBlue">Send message</a>
          </section>
  
          <section class="hide right-content" id="contentWorkouts">
            <div class="content-flex">
              <figure>
                <img
                  src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg"
                  class="profilePicture"
                  onclick="collapseWorkout1()"
                />
                <p>Beginner Bodyweight</p>
              </figure>
              <figure>
                <img
                  src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg"
                  class="profilePicture"
                  onclick="collapseWorkout2()"
                />
                <p>At home sculpt</p>
              </figure>
              <figure>
                <img
                  src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg"
                  class="profilePicture"
                  onclick="collapseWorkout3()"
                />
                <p>Bodyweight</p>
              </figure>
            </div>
            
          <div class="content-grid">
          <a href="#workouts" class="gradientButtonBlue">Start workout</a>

          <section id="workout1" class="show">
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>Core Work</p>
            </figure>
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>Biceps</p>
            </figure>
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>Triceps</p>
            </figure>
          </section>

          <section id="workout2" class="hide">
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>W1/D1 Bodyweight</p>
            </figure>
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>W1/D2 Bodyweight</p>
            </figure>
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>W1/D3 Bodyweight</p>
            </figure>
          </section>

          <section id="workout3" class="hide">
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>Hiit, Core, and lower body</p>
            </figure>
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>Hiit, Core, and upper body</p>
            </figure>
            <figure>
              <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" />
              <p>Full body</p>
            </figure>
          </section>
        </div>
          </section>
  
          <section class="show right-content" id="contentInsights">
      
          </section>
  
        </section>
      </div>
    </div>
  </section>
  
  


      `;
  }

  appendPlaybook(playbooks) {
    console.log(playbooks);
    let template = "";
    for (let playbook of playbooks) {
      for (let creator of playbook.creators) {
        template += /*html*/ `
        <article>
         ${creator.name}
        </article>
        `;
      }
    }
    document.querySelector("#contentInsights").innerHTML = template;
  }

  collapseAbout() {
    if (document.querySelector("#contentInsights").classList.contains("show")) {
      document.querySelector("#contentInsights").classList.remove("show");
      document.querySelector("#contentInsights").classList.add("hide");
    }

    if (document.querySelector("#contentWorkouts").classList.contains("show")) {
      document.querySelector("#contentWorkouts").classList.remove("show");
      document.querySelector("#contentWorkouts").classList.add("hide");
    }

    document.querySelector("#contentAbout").classList.remove("hide");
    document.querySelector("#contentAbout").classList.add("show");
  }

  collapseWorkout() {
    if (document.querySelector("#contentInsights").classList.contains("show")) {
      document.querySelector("#contentInsights").classList.remove("show");
      document.querySelector("#contentInsights").classList.add("hide");
    }

    if (document.querySelector("#contentAbout").classList.contains("show")) {
      document.querySelector("#contentAbout").classList.remove("show");
      document.querySelector("#contentAbout").classList.add("hide");
    }

    document.querySelector("#contentWorkouts").classList.remove("hide");
    document.querySelector("#contentWorkouts").classList.add("show");
  }
  collapseInsight() {
    if (document.querySelector("#contentAbout").classList.contains("show")) {
      document.querySelector("#contentAbout").classList.remove("show");
      document.querySelector("#contentAbout").classList.add("hide");
    }

    if (document.querySelector("#contentWorkouts").classList.contains("show")) {
      document.querySelector("#contentWorkouts").classList.remove("show");
      document.querySelector("#contentWorkouts").classList.add("hide");
    }

    document.querySelector("#contentInsights").classList.remove("hide");
    document.querySelector("#contentInsights").classList.add("show");
  }

  collapseWorkout1() {
    if (document.querySelector("#workout2").classList.contains("show")) {
      document.querySelector("#workout2").classList.remove("show");
      document.querySelector("#workout2").classList.add("hide");
    }

    if (document.querySelector("#workout3").classList.contains("show")) {
      document.querySelector("#workout3").classList.remove("show");
      document.querySelector("#workout3").classList.add("hide");
    }

    document.querySelector("#workout1").classList.remove("hide");
    document.querySelector("#workout1").classList.add("show");
  }

  collapseWorkout2() {
    if (document.querySelector("#workout1").classList.contains("show")) {
      document.querySelector("#workout1").classList.remove("show");
      document.querySelector("#workout1").classList.add("hide");
    }

    if (document.querySelector("#workout3").classList.contains("show")) {
      document.querySelector("#workout3").classList.remove("show");
      document.querySelector("#workout3").classList.add("hide");
    }

    document.querySelector("#workout2").classList.remove("hide");
    document.querySelector("#workout2").classList.add("show");
  }

  collapseWorkout3() {
    if (document.querySelector("#workout2").classList.contains("show")) {
      document.querySelector("#workout2").classList.remove("show");
      document.querySelector("#workout2").classList.add("hide");
    }

    if (document.querySelector("#workout1").classList.contains("show")) {
      document.querySelector("#workout1").classList.remove("show");
      document.querySelector("#workout1").classList.add("hide");
    }

    document.querySelector("#workout3").classList.remove("hide");
    document.querySelector("#workout3").classList.add("show");
  }
}
