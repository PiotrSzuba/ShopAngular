import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/Types';
import { Store, select } from '@ngrx/store';
import { ItemStoreState, loadItem } from 'src/stores/ItemStore';
import {
  selectItemById,
  selectItemLoading,
} from 'src/stores/ItemStore/itemStoreSelectors';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-item-page',
  templateUrl: './itemPage.component.html',
  styleUrls: ['./itemPage.component.css'],
})
export class ItemPageComponent implements OnInit {
  private itemId = '';

  item$: Observable<IItem | undefined> = EMPTY;
  itemLoading$: Observable<boolean> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private itemStore: Store<ItemStoreState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
    });
    this.itemStore.dispatch(loadItem({ id: this.itemId }));
    this.item$ = this.itemStore.pipe(select(selectItemById));
    this.itemLoading$ = this.itemStore.pipe(select(selectItemLoading));
  }
}
