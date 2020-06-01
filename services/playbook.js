class PlayBookService {
  constructor() {}

  async loadCreator() {
    try {
      let response = await fetch("../playbookCreators.json");
      let jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log("Error getting data", error);
    }
  }

  async loadWorkout() {
    try {
      let response = await fetch("../playbookWorkouts.json");
      let jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log("Error getting data", error);
    }
  }
}

const playBookService = new PlayBookService();
export default playBookService;
