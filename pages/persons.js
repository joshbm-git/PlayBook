export default class PersonsPage {
  constructor() {
    //create array of objects
    let workouts = [
      {
        number: "one",
        summary: "squat to kick 3 sets of 20 reps",
        description:
          "Do 3 sets of 20 reps. Make sure you remain control during the excentric movement. Pause for 1 second at the bottom and push through your heels to begin the concentric motion",
      },
      {
        number: "two",
        summary: "other workout summary",
        description: "different description goes here",
      },
    ];
    this.template();
    this.appendWorkouts(workouts);
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="persons" class="page">
        <header class="topbar">
          <h2>Persons</h2>
        </header>
        <h1>asdasd</h1>
        <h1>asdasd</h1>
        <h1>asdasd</h1>
        <h1>asdasd</h1>
        <div id="grid-persons" class="grid-container">
        <h1>asdasd</h1></div>
      </section>
    `;
  }

  appendWorkouts(workouts) {
    console.log("workouts have been appended!");
    console.log(workouts);
  }
}
