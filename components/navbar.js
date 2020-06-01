export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">

      <div class="logo"> <a href="#home">  <img src="../images/logo-pb.png" alt=""></a>
    </div>
      
      <div class="links">        
      <a href="#home"><i class="fas fa-home"></i></a>
      <a href="#myProfile"><i class="fas fa-user"></i></a>
      <a href="#persons"><i class="fas fa-search"></i></a>
      </div>


      </nav>
    `;
  }
}
