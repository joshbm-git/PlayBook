// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import CreatorPage from "./pages/creator.js";
import WorkoutPage from "./pages/workouts.js";
import MyProfilePage from "./pages/myProfile.js";

import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let creatorPage = new CreatorPage();
let myProfilePage = new MyProfilePage();
let workoutPage = new WorkoutPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
window.collapseAbout = () => creatorPage.collapseAbout();
window.collapseWorkout = () => creatorPage.collapseWorkout();
window.collapseInsight = () => creatorPage.collapseInsight();

window.collapseWorkout1 = () => creatorPage.collapseWorkout1();
window.collapseWorkout2 = () => creatorPage.collapseWorkout2();
window.collapseWorkout3 = () => creatorPage.collapseWorkout3();

window.changeWorkout = (workouts, workoutNumber) =>
  workoutPage.changeWorkout(workouts, workoutNumber);
window.next = () => workoutPage.next();
window.previous = () => workoutPage.previous();
window.progress = () => workoutPage.progress();
