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
            <li onclick="collapseAbout()">About</li>
            <li onclick="collapseWorkout()">Workouts</li>
            <li onclick="collapseInsight()">Insights</li>
            </ul>
            </nav>
            
            <section class="hide right-content" id="contentAbout">
            <p>About</p>
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture">
            </section>

            <section class="show right-content" id="contentWorkouts">
            <p>Workouts</p>
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture" onclick="collapseWorkout1()">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture" onclick="collapseWorkout2()">
            <img src="https://www.thegate.ca/wp-content/uploads/2020/02/Magnus-880x573.jpg" class="profilePicture" onclick="collapseWorkout3()">

            <section id="workout1" class="show">
            <p>Workout1</p>
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            </section>

            <section id="workout2" class="hide">
            <p>Workout2</p>
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            </section>

            <section id="workout3" class="hide">
            <p>Workout3</p>
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            <img src=" https://pbs.twimg.com/media/ERNBiC2WsAEoa3T.jpg" class="profilePicture">   
            </section>
            </section>

            <section class="hide right-content" id="contentInsights">
            <p>Nutrition plan</p>

            </section>
    
            </section>
          </div>
      </div>
        </section>
      `;
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
