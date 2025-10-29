import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.reducer';
import { ValidFilters } from 'src/app/filters/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  currentFilter: ValidFilters;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      this.todos = todos;

      this.currentFilter = filter;
    });
  }
}
