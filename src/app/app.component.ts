import { Component } from '@angular/core';

export interface Task {
  title: String;
  complete: Boolean;
  description?: String
}

export interface Project {
  title: String,
  description: String,
  image: String,
  status: 'PLANNED' | 'IN PROGRESS' | 'DONE'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task IO';
  dev = 'DaniZeger'

}
