import { createReducer, on } from '@ngrx/store';
import { initialItemStore } from './itemStoreState';
import {
  loadItems,
  loadItemsSuccess,
  loadItemsFailure,
  loadItem,
  loadItemSuccess,
  loadItemFailure,
} from './itemStoreActions';

export const itemStoreReducer = createReducer(
  initialItemStore,
  on(loadItems, state => ({ ...state, itemsLoading: true })),
  on(loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    itemsLoading: false,
  })),
  on(loadItemsFailure, state => ({ ...state, itemsLoading: false })),
  on(loadItem, state => ({ ...state, itemLoading: true })),
  on(loadItemSuccess, (state, { item }) => ({
    ...state,
    item,
    itemsLoading: false,
  })),
  on(loadItemFailure, state => ({ ...state, itemLoading: false }))
);
