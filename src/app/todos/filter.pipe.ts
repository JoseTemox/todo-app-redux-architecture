import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.models';
import { ValidFilters } from '../filters/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filterType: ValidFilters): Todo[] {
    switch (filterType) {
      case 'completed':
        return todos.filter((todo) => !todo.completed);
      case 'pending':
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  }
}
