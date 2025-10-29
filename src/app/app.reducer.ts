import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/todo.reducers';
import { ValidFilters } from './filters/filter.actions';
import { filterReducer } from './filters/filter.reducers';

export interface AppState {
  todos: Todo[];
  filter: ValidFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
