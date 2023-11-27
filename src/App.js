import EventPlannerController from './controller/EventPlannerController.js';

class App {
	#eventPlannerController = new EventPlannerController();

	async run() {
		await this.#eventPlannerController.run();
	}
}

export default App;
