import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	tasks : string[] = [];

	add(task : string) {
		if(task) {
			this.tasks.push(task);
		}
	}

	remove(task : string) {
		if(task) {
			const index: number = this.tasks.indexOf(task);
			if (index !== -1) {
				this.tasks.splice(index, 1);
			}    
		}
	}
}
