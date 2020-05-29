// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import CreatorPage from "./pages/creator.js";
import PersonsPage from "./pages/persons.js";
import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let creatorPage = new CreatorPage();
let personsPage = new PersonsPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
window.collapseAbout = () => creatorPage.collapseAbout();
window.collapseWorkout = () => creatorPage.collapseWorkout();
window.collapseInsight = () => creatorPage.collapseInsight();

window.collapseWorkout1 = () => creatorPage.collapseWorkout1();
window.collapseWorkout2 = () => creatorPage.collapseWorkout2();
window.collapseWorkout3 = () => creatorPage.collapseWorkout3();
