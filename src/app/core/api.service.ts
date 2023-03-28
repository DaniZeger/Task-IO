import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as tasks from 'server/controllers/tasks';
import { Project, Task, User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = 'http://localhost:3000/'

  private token = ''
  TOKEN_KEY = 'token'
  setToken(val: string) {
    localStorage.setItem(this.TOKEN_KEY, val)
    // this.token = val
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || ''
  }

  deleteToken() {
    localStorage.removeItem(this.TOKEN_KEY)
  }

  constructor(private http: HttpClient) { }

  // getUserPosts() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
  // }


  //! ##### GENERAL FUNCATIONS ######  

  //TODO An axample for general funcation that can help short the code for similar andpoints with different value and data //

  POST<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(
      `${this.serverUrl}${endpoint}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken()
        }
      }
    )
  }

  GET<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.serverUrl}${endpoint}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken()
        }
      })
  }

  DELETE<T>(endpoint: string, id: string): Observable<T> {
    return this.http.delete<T>(
      `${this.serverUrl}${endpoint}/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken()
        }
      }
    )
  }

  UPDATE<T>(endpoint: string, id: string, data: T): Observable<T> {
    return this.http.put<T>(
      `${this.serverUrl}${endpoint}/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken()
        }
      }
    )
  }

  //! ###### TASKS MATHODS ######

  getTasks(): Observable<Array<Task>> {
    return this.GET<Array<Task>>('tasks')
  }

  addTask(task: Task): Observable<Task> {
    return this.POST<Task>('tasks', task)
  }

  deleteTask(id: string): Observable<Task> {
    return this.DELETE<Task>('tasks', id)
  }

  updateTask(id: string, task: Task): Observable<Task> {
    return this.UPDATE<Task>('tasks', id, task)
  }

  //! ###### PROJECTS MATHODS ######

  getOneProject(id: string): Observable<Project> {
    return this.GET<Project>(`projects/${id}`)
  }

  getProject(): Observable<Array<Project>> {
    return this.GET<Array<Project>>('projects')
  }

  addProject(project: Project): Observable<Project> {
    return this.POST<Project>('projects', project)
  }

  deleteProject(id: string): Observable<Project> {
    return this.DELETE<Project>('projects', id)
  }

  updateProject(id: string, project: Project): Observable<Project> {
    return this.UPDATE<Project>('projects', id, project)
  }


  //! ###### USERS MATHODS ######

  signUp(user: User): Observable<User> {
    return this.POST<User>('users/signup', user)
  }

  logIn(user: User): Observable<User> {
    return this.POST<User>('users/login', user)
  }

}
