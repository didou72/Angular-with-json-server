import { Task } from './../models/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL = "http://localhost:7000/tasks";
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Task[]>(this.apiURL);
  }
  delete(id){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  persist(task){
    return this.http.post<Task>(this.apiURL, task);
  }

  completed(id, completed){
    return this.http.patch(`${this.apiURL}/${id}`, {completed: !completed});
  }

  update(task){
    return this.http.put(`${this.apiURL}/${task.id}`, task);
  }
}
