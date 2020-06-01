// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import WorkoutPage from "./pages/workouts.js";
import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let workoutPage = new WorkoutPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();

window.changeWorkout = (workouts, workoutNumber) =>
  workoutPage.changeWorkout(workouts, workoutNumber);
window.next = () => workoutPage.next();
window.previous = () => workoutPage.previous();
window.progress = () => workoutPage.progress();
