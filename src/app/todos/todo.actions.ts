import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create TODO',
  props<{ text: string }>()
);
export const toggle = createAction(
  '[TODO] Toggle TODO',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit TODO',
  props<{ id: number; text: string }>()
);
export const deleteTodo = createAction(
  '[TODO] Delete TODO',
  props<{ id: number }>()
);

export const completedAll = createAction(
  '[TODO] CompletedAll TODO',
  props<{ isCompleted: boolean }>()
);
export const clearCompleted = createAction('[TODO] ClearCompleted TODO');
