import Observer from "../interfaces/observer";
import Subject from "../interfaces/subject";

class ConcretObserver implements Observer {
	private subject: Subject;
	private state: number;
	constructor(subject: Subject) {
		this.subject = subject;
		this.state = 0;
	}
	update(state: number) {
		console.log(`Latest observed state is:${state}`);
	}
}

export default ConcretObserver;
