import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { todo } from '../model/todo.type';
import { catchError, single } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})

// OnInt is a lifecycle loop: this allows us to run a function (ngOnInit()) when it is initiated
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
