/* ALL CODE BELOW IS MADE BY MIKE ---------------------------------*/
import playBookService from "../services/playbook.js";
export default class HomePage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let playbookCreators = await playBookService.loadCreator();
    this.appendCreator(playbookCreators);

    let playbookWorkouts = await playBookService.loadWorkout();
    this.appendWorkout(playbookWorkouts);
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
      <div class="content-wrapper">
      <h1>My Creators</h1>
      <div class="flex-container">


        <div class="grid-creators">
        <img src="images/ninafitness.png">
        <h2>Nina Agdal</h2>
        <a href="#creator"> <p>START</p> </a>
        </div>
        </div>

        <h1>Discover</h1>
        <h3>TOP CREATORS</h3>

        <div class="flex-container" id="creators">
        </div>


        <h3>POPULAR PROGRAMS</h3>

        <div class="flex-container" id="workouts">
        </div>




        </div>
        </div>
      </section>
    `;
  }

  appendCreator(playbookCreators) {
    console.log(playbookCreators);
    let template = "";
    for (let playbook of playbookCreators) {
      for (let creator of playbook.creators) {
        template += /*html*/ `
        <a href="#creator">
        <div class="grid-discover">
        <img src="${creator.img}">

        <div class="text-block">
        <h2>${creator.name}</h2>
        <p>${creator.title}</p>
        </div>
        <div class="tags">
        <ul>
        <li>${creator.tags}</li>
        </ul>
        </div>
        </div>
        </a>
        `;
      }
    }
    document.querySelector("#creators").innerHTML = template;
  }

  appendWorkout(playbookWorkouts) {
    console.log(playbookWorkouts);
    let template = "";
    for (let playbook of playbookWorkouts) {
      for (let workout of playbook.workouts) {
        template += /*html*/ `
        <a href="#creator">
        <div class="grid-discover">

        <img src="${workout.img}">

        <div class="text-desc">
        <h2>${workout.name}</h2>
        <p>Magnus Lygdback</p>
        </div>

        </div>
        </a>
        `;
      }
    }
    document.querySelector("#workouts").innerHTML = template;
  }
}

{
  /* <div class="grid-discover">

        <img src="images/magnus.jpg">

        <div class="text-block">
        <h2>Magnus Lygdback</h2>
        <p>Trainer & Lifestyle Coach</p>
        </div> */
}