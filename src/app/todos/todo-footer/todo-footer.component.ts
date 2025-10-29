import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filters/filter.actions';
import * as todoActions from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.ValidFilters = 'all';

  filters: actions.ValidFilters[] = ['all', 'completed', 'pending'];

  pending = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;

      this.pending = state.todos.filter((item) => !item.completed).length;
    });
  }

  changeFilter(filter: actions.ValidFilters) {
    this.store.dispatch(actions.setFilter({ filter: filter }));
  }

  clearCompleted() {
    this.store.dispatch(todoActions.clearCompleted());
  }
}
