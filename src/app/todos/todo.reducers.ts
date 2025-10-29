import { createReducer, on } from '@ngrx/store';
import {
  clearCompleted,
  completedAll,
  create,
  deleteTodo,
  edit,
  toggle,
} from './todo.actions';
import { Todo } from './models/todo.models';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitán América'),
];

//no hacer push en la creacion del estado porque puede mutarlo, se debe regreas un nuevo estado independediente por eso se usa el operador spred para evitar mutar el estado inicial
const _actionsReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) =>
    state.map((item) => {
      if (item.id === id) {
        return { ...item, completed: item.completed };
      }
      return item;
    })
  ),
  on(edit, (state, { id, text }) =>
    state.map((item) => {
      if (item.id === id) {
        return { ...item, text };
      }
      return item;
    })
  ),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(completedAll, (state, { isCompleted }) =>
    state.map((todo) => ({ ...todo, completed: isCompleted }))
  ),
  on(clearCompleted, (state) => state.filter((todo) => !todo.completed))
);

export function todoReducer(state, action) {
  return _actionsReducer(state, action);
}
