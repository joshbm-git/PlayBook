export default class HomePage {
  constructor() {
    this.template();
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
        <p>START</p>
        </div>
        <div class="grid-creators">
        <img src="images/ninafitness.png">
        <h2>Nina Agdal</h2>
        <p>START</p>
        </div>
        <div class="grid-creators">
        <img src="images/ninafitness.png">
        <h2>Nina Agdal</h2>
        <p>START</p>
        </div>
        </div>

        <h1>Discover</h1>
        <h3>TOP CREATORS</h3>

        <div class="flex-container">

        <div class="grid-discover">
        
        <img src="images/magnus.jpg">

        <div class="text-block">
        <h2>Magnus Lygdback</h2>
        <p>Trainer & Lifestyle Coach</p>
        </div>
        <div class="tags">
        <ul>
        <li>Strength</li>
        <li>Celebrity</li>
        <li>Athletic</li>
        </ul>
        </div>
        </div>

        
        
        <div class="grid-discover">
        
        <img src="images/magnus.jpg">

        <div class="text-block">
        <h2>Magnus Lygdback</h2>
        <p>Trainer & Lifestyle Coach</p>
        </div>
        <div class="tags">
        <ul>
        <li>Strength</li>
        <li>Celebrity</li>
        <li>Athletic</li>
        </ul>
        </div>
        </div>

         <div class="grid-discover">
        
        <img src="images/magnus.jpg">

        <div class="text-block">
        <h2>Magnus Lygdback</h2>
        <p>Trainer & Lifestyle Coach</p>
        </div>
        <div class="tags">
        <ul>
        <li>Strength</li>
        <li>Celebrity</li>
        <li>Athletic</li>
        </ul>
        </div>
        </div>

        <div class="grid-discover">
        
        <img src="images/magnus.jpg">

        <div class="text-block">
        <h2>Magnus Lygdback</h2>
        <p>Trainer & Lifestyle Coach</p>
        </div>
        <div class="tags">
        <ul>
        <li>Strength</li>
        <li>Celebrity</li>
        <li>Athletic</li>
        </ul>
        </div>
        </div>

         <div class="grid-discover">
        
        <img src="images/magnus.jpg">

        <div class="text-block">
        <h2>Magnus Lygdback</h2>
        <p>Trainer & Lifestyle Coach</p>
        </div>
        <div class="tags">
        <ul>
        <li>Strength</li>
        <li>Celebrity</li>
        <li>Athletic</li>
        </ul>
        </div>
        </div>
       
        </div>

        
        <h3>POPULAR PROGRAMS</h3>

        <div class="flex-container">

        <div class="grid-discover">
        
        <img src="images/tombraider.jpg">

        <div class="text-desc">
        <h2>Tomb Raider</h2>
        <p>Magnus Lygdback</p>
        </div>
        
        </div>

          <div class="grid-discover">
        
        <img src="images/tombraider.jpg">

        <div class="text-desc">
        <h2>Tomb Raider</h2>
        <p>Magnus Lygdback</p>
        </div>
        
        </div>

          <div class="grid-discover">
        
        <img src="images/tombraider.jpg">

        <div class="text-desc">
        <h2>Tomb Raider</h2>
        <p>Magnus Lygdback</p>
        </div>
        
        </div>

         <div class="grid-discover">
        
        <img src="images/tombraider.jpg">

        <div class="text-desc">
        <h2>Tomb Raider</h2>
        <p>Magnus Lygdback</p>
        </div>
        
        </div>

         <div class="grid-discover">
        
        <img src="images/tombraider.jpg">

        <div class="text-desc">
        <h2>Tomb Raider</h2>
        <p>Magnus Lygdback</p>
        </div>
        
        </div>
        
        </div>

        <h3>NUTRITION PLANS</h3>
        <div class="flex-container">
        <div class="grid-nutrition">
        <img src="images/nutrition.jpg">
        <h2>Super Hero</h2>
        <p>Nutrition Plan</p>
        </div>
        <div class="grid-nutrition">
        <img src="images/nutrition.jpg">
        <h2>Super Hero</h2>
        <p>Nutrition Plan</p>
        </div>
        <div class="grid-nutrition">
        <img src="images/nutrition.jpg">
        <h2>Super Hero</h2>
        <p>Nutrition Plan</p>
        </div>
        <div class="grid-nutrition">
        <img src="images/nutrition.jpg">
        <h2>Super Hero</h2>
        <p>Nutrition Plan</p>
        </div>
        <div class="grid-nutrition">
        <img src="images/nutrition.jpg">
        <h2>Super Hero</h2>
        <p>Nutrition Plan</p>
        </div>
        <div class="grid-nutrition">
        <img src="images/nutrition.jpg">
        <h2>Super Hero</h2>
        <p>Nutrition Plan</p>
        </div>
        </div>
        </div>
      </section>
    `;
  }
}
