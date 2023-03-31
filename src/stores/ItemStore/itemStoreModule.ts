import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { itemStoreReducer } from './itemStoreReducer';
import { ItemStoreEffects } from './itemStoreEffects';

@NgModule({
  imports: [
    StoreModule.forFeature('ItemStore', itemStoreReducer),
    EffectsModule.forFeature([ItemStoreEffects]),
  ],
  providers: [ItemStoreEffects],
})
export class ItemStoreModule {}
