import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/Types';
import { Store, select } from '@ngrx/store';
import { ItemStoreState, loadItems } from 'src/stores/ItemStore';
import {
  selectItems,
  selectItemsLoading,
} from 'src/stores/ItemStore/itemStoreSelectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<ItemStoreState>) {}

  items$: Observable<IItem[]> = this.store.pipe(select(selectItems));
  itemsLoading$: Observable<boolean> = this.store.pipe(
    select(selectItemsLoading)
  );

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }
}
