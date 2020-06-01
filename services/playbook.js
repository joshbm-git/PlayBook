class PlayBookService {
  constructor() {}

  async loadPlaybook() {
    try {
      let response = await fetch("../playbook.json");
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
