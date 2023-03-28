import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  // getUserPosts() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
  // }


  //! ##### GENERAL FUNCATION ######  

  //TODO An axample for general funcation that can help short the code for similar andpoints with different value and data //

  POST<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(
      `${this.serverUrl}${endpoint}`,
      data,
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  //! ###### TASKS MATHODS ######

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${this.serverUrl}tasks`)
  }

  addTask(task: Task): Observable<Task> {
    // return this.http.post<Task>(
    //   `${this.serverUrl}tasks`,
    //   task,
    //   { headers: { 'Content-Type': 'application/json' } }
    // )
    return this.POST<Task>('tasks', task)
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(
      `${this.serverUrl}/tasks/${id}`,
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.serverUrl}/tasks/${id}`,
      task,
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  //! ###### USERS MATHODS ######

  signUp(user: User): Observable<User> {
    return this.POST<User>('users/signup', user)
  }

}
