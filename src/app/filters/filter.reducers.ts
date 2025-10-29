import { createReducer, on } from '@ngrx/store';
import { setFilter, ValidFilters } from './filter.actions';

const initialState: ValidFilters = 'all';

//no hacer push en la creacion del estado porque puede mutarlo, se debe regreas un nuevo estado independediente por eso se usa el operador spred para evitar mutar el estado inicial
const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
