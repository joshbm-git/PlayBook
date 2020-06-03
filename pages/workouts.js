export default class WorkoutPage {
  constructor() {
    //create array of objects
    this.workouts = [{
        number: 1,
        video: "https://www.youtube.com/embed/-b2lNLq3EaA",
        type: "Core and lower body",
        summary: "Squat to kick 3 sets of 20 reps",
        description: "Do 3 sets of 20 reps. Make sure you remain control during the excentric movement. Pause for 1 second at the bottom and push through your heels to begin the concentric motion",
      },
      {
        number: 2,
        video: "https://www.youtube.com/embed/ml6cT4AZdqI",
        type: "Arms hypertrophy",
        summary: "Biceps and triceps superset 3 sets of 10 reps",
        description: "Do 3 supersets of 10 reps. Focus on contracting the muscle at the peak. Maintain control on the negative part of the motion",
      },
      {
        number: 3,
        video: "https://www.youtube.com/embed/gC_L9qAHVJ8",
        type: "Back and biceps",
        summary: "Bent rows 3 sets of 8 reps",
        description: "Do 3 sets of 8 reps. Pause for a brief moment when you bring the weights back. Focus on control and squeezing your muscles.",
      },
      {
        number: 4,
        video: "https://www.youtube.com/embed/bkHuvrLxpUU",
        type: "Booty blaster",
        summary: "Walking lunges for 1 min",
        description: "Do walking lunges for 1 minute. Use proper form and hold for a brief moment at the bottom of the movement",
      },
      {
        number: 5,
        video: "https://www.youtube.com/embed/1iMn9L6SIsw",
        type: "Aerobic",
        summary: "Aerobic exercises",
        description: "Something something aerobic etc etc",
      },
      {
        number: 6,
        video: "https://www.youtube.com/embed/skde8_aWbFo",
        type: "HIIT - High Intensity Interval Training",
        summary: "Sprint for 30 seconds and rest 30 seconds. Repeat 10 times.",
        description: "When sprinting it is important that you go all out to gain most benefits from the training",
      },
    ];
    //end of array

    this.workoutNumber = 1;
    this.template();
    this.progress();
    this.changeWorkout(this.workoutNumber);
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="workoutSession" class="page">
        <header class="topbar">
        </header>
        <div id="headline"></div>
        <div id="progressBar"></div>


        <div id="workoutContainer"></div>

      </section>
    `;
  }

  changeWorkout(workoutNumber) {
    let workout;
    for (let w of this.workouts) {
      if (workoutNumber == w.number) {
        workout = w;
        break;
      }
    }
    let headline = "";
    let htmlTemplate = "";

    htmlTemplate += `
       <iframe class="video" width="220" height="215"
        src="${workout.video}">
        </iframe>
       <h3>${workout.summary}</h3>
       <h4>Description</h4>
       <p>${workout.description}</p>`;

    headline += `<h2>${workout.type}</h2>`;

    if (this.workoutNumber > 1) {
      htmlTemplate += `
        <a class="prev" onclick="previous();progress();">&#10094;&#10094;</a>`;
    }

    if (this.workoutNumber < this.workouts.length) {
      htmlTemplate += `
        <a class="next" onclick="next();progress();">&#10095;&#10095;</a>`;
    }

    document.querySelector("#headline").innerHTML = headline;

    document.querySelector("#workoutContainer").innerHTML = htmlTemplate;
  }

  setWorkout(i) {
    console.log(i);
    console.log("clicked!");
    console.log(this.workoutNumber);
    this.workoutNumber = i;
    this.changeWorkout(this.workoutNumber);
    this.progress();
  }

  progress() {
    let color = 'style="background-color:rgb(101, 98, 248);"';
    let htmlTemplate = "";
    for (let i = 0; i < this.workouts.length; i++) {
      if (i >= this.workoutNumber) {
        color = 'style="background-color:rgb(175,175,175);color: grey;"';
      }
      htmlTemplate += `<div onclick="setWorkout(${
        i + 1
      });" class="progressNumber"${color}>${i + 1}</div>`;
    }
    document.querySelector("#progressBar").innerHTML = htmlTemplate;
  }

  next() {
    this.workoutNumber++;
    this.changeWorkout(this.workoutNumber);
    console.log("Clicked next");
    console.log("Workout number " + this.workoutNumber);
  }

  previous() {
    this.workoutNumber--;
    this.changeWorkout(this.workoutNumber);
    console.log("Clicked previous");
    console.log("Workout number " + this.workoutNumber);
  }
}