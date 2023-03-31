import { ActionCreator } from '@ngrx/store';
import { IItem } from 'src/Types';

export interface ItemStoreState {
  items: IItem[];
  itemsLoading: boolean;
  item: IItem | undefined;
  itemLoading: boolean;
}

export interface ItemStoreActions {
  loadItems: ActionCreator;
}

export const initialItemStore: ItemStoreState = {
  items: [],
  itemsLoading: true,
  item: undefined,
  itemLoading: true,
};
