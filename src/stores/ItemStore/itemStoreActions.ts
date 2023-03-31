import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/Types';

export const loadItems = createAction('[ItemStore] Load Items');
export const loadItemsSuccess = createAction(
  '[ItemStore] Load Items Success',
  props<{ items: IItem[] }>()
);
export const loadItemsFailure = createAction(
  '[ItemStore] Load Items Failure',
  props<{ error: unknown }>()
);

export const loadItem = createAction(
  '[ItemStore] Load Item',
  props<{ id: string }>()
);
export const loadItemSuccess = createAction(
  '[ItemStore] Load Item Success',
  props<{ item: IItem }>()
);
export const loadItemFailure = createAction(
  '[ItemStore] Load Item Failure',
  props<{ error: unknown }>()
);
