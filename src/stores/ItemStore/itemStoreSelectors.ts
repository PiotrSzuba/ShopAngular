import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemStoreState } from './itemStoreState';

export const selectItemStoreState =
  createFeatureSelector<ItemStoreState>('ItemStore');

export const selectItems = createSelector(
  selectItemStoreState,
  state => state.items
);

export const selectItemsLoading = createSelector(
  selectItemStoreState,
  state => state.itemsLoading
);

export const selectItemById = createSelector(
  selectItemStoreState,
  state => state.item
);

export const selectItemLoading = createSelector(
  selectItemStoreState,
  state => state.itemLoading
);
