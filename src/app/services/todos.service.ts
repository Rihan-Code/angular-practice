import { inject, Injectable } from '@angular/core';
import { todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

// this implies the services can be injected at other places 
@Injectable({
  providedIn: 'root', // this will make our service availabe everywhere. If we only want to use it in a particular component than we have to remove this line 
})
export class TodosService {
  http = inject(HttpClient);
  // todoItems: Array<todo> = [
  //   {
  //     title: 'groceries',
  //     id: 0,
  //     userId: 1,
  //     completed: false
  //   },
  //   {
  //     title: 'car wash',
  //     id: 1,
  //     userId: 1,
  //     completed: false
  //   },
  // ];

  
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<todo>>(url );
  }
}
