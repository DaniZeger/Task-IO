import { Component } from '@angular/core';
import { Task, Project } from '../../app.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  today = new Date()

  sectionTitle = `Today's Tasks`
  sectionTitle2 = `My Projects`

  projects: Array<Project> = [
    {
      title: 'My first project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis',
      image: 'https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700',
      status: 'PLANNED'
    },
    {
      title: 'My second project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis',
      image: 'https://cdn.plainconcepts.com/wp-content/uploads/2021/01/wireframes-1.jpg',
      status: 'IN PROGRESS'
    }
  ]

  tasks: Array<Task> = [
    {
      title: 'First task',
      complete: false
    },
    {
      title: 'Second task',
      complete: false
    },
    {
      title: 'Anothe task',
      complete: false
    },
    // {
    //   title: 'One more',
    //   complete: false
    // },
    {
      title: 'Lest one',
      complete: true
    }
  ]

  listStatusCss(): string {
    return this.tasks.length <= 3 ? 'text-success' : 'text-danger'
  }

  getImagePath() {
    return "https://archives.bulbagarden.net/media/upload/archive/4/47/20130810032505%210094Gengar.png"
  }

  completedCss(task: Task): string {
    return task.complete ? 'text-decoration-line-through' : ''
  }

  // getTaskById(id: number): string {
  //   return this.tasks[id]
  // }
}
