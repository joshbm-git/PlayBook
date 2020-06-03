/* ALL CODE BELOW IS MADE BY JACOB ---------------------------------*/
export default class MyProfilePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="myProfile" class="page">
      <div class="profileWrapper">
        <h2>My profile</h2>
          <div class="profileFlexWrapper">
            <section class="profileMetadata">
            <img src="images/sample-profilepicture.jpg" class="profilePicture" alt="Playbook Profile Picture">
              <h3>@myinstahandle</h3>
              <a href="#myProfile" class="strokedButton">Change pic</a>
              <a href="#myProfile" class="strokedButton">Help</a>
            </section>
            <section class="profileInformation">
            <div class="profileAndSubscription">
              <h3>Edit profile</h3>
              <form>
                <input type="text" id="name" name="name" placeholder="Your name">
                <input type="text" id="instagram" name="instagram" placeholder="Your Instagram-handle">
                <!-- <input type="submit" id="submit" class="gradientButtonBlue" value="Save info"> -->
              </form>
              <a href="#myProfile" class="gradientButtonBlue">Save info</a>
              <h3>My subscription</h3>
              <p><span class="activeSubscription">Subscription active <i class="fas fa-check"></i></span></p>
              <p>Until 05/05/2021</p><br>
              <a href="#myProfile" class="gradientButtonBlue">Renew subscription</a>
              <a href="#myProfile" class="gradientButtonRed">Cancel subscription</a>
            </div>
            <div class="helpSection">
              <h3>Help</h3>
              <a href="#myProfile">Feedback for Playbook</a>
              <a href="#myProfile">Support</a>
              <a href="#myProfile">Become a partner</a>
              <a href="#myProfile">Privacy Policy</a>
              <a href="#myProfile">Terms of Use</a>
            </div>
              </section>
          </div>
      </div>
      </section>
    `;
  }
}