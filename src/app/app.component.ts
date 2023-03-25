import { AfterViewInit, Component } from '@angular/core';
import { SessionService } from './core/session.service';

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
export class AppComponent implements AfterViewInit {
  title = 'Task IO';
  dev = 'DaniZeger'

  constructor(private session: SessionService) { }

  ngAfterViewInit(): void {
    this.session.redirectToHome()
  }

}
