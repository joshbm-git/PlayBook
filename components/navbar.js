export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
      <div class="tabbar-content">
      <div class="logo"><a href="#home"><img src="images/logo-pb.png" alt="Playbook logo"></a>
    </div>
      <div class="links">
      <a href="#home"><i class="fas fa-home fa-sm"></i></a>
      <a href="#myProfile"><i class="fas fa-user fa-sm"></i></a>
      <!-- <a href="#workoutSession"><i class="fas fa-search fa-sm"></i></a> -->
      </div>
      </div>


      </nav>
    `;
  }
}