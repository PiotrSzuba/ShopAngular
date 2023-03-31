import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  filter,
  withLatestFrom,
  switchMap,
  take,
} from 'rxjs/operators';
import { ItemService } from 'src/services';
import { selectItems, selectItemById } from './itemStoreSelectors';
import {
  loadItems,
  loadItemsSuccess,
  loadItemsFailure,
  loadItem,
  loadItemSuccess,
  loadItemFailure,
} from './itemStoreActions';

@Injectable()
export class ItemStoreEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      withLatestFrom(this.store.select(selectItems)),
      filter(([action, items]) => items.length === 0),
      mergeMap(() =>
        this.itemService.getAllItem().pipe(
          map(items => loadItemsSuccess({ items })),
          catchError(error => of(loadItemsFailure({ error })))
        )
      )
    )
  );

  loadItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItem),
      switchMap(({ id }) => {
        return this.store.select(selectItemById).pipe(
          take(1),
          mergeMap(item => {
            if (item) {
              return of(loadItemSuccess({ item }));
            } else {
              return this.itemService.getItem(id).pipe(
                map(item => loadItemSuccess({ item })),
                catchError(error => of(loadItemFailure({ error })))
              );
            }
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(ItemService) private itemService: ItemService,
    private store: Store
  ) {}
}
