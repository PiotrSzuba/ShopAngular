import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar';
import { FooterComponent } from 'src/components/footer';
import { HomeComponent, CartPageComponent, ItemPageComponent } from 'src/pages';
import { CardItemComponent } from 'src/components/cardItem';
import {
  SpinnerCircleComponent,
  NumberPickerComponent,
  EditableNumberFieldComponent,
  EditableTextFieldComponent,
  EditableTextAreaComponent,
} from 'src/components/common';
import { ItemStoreModule } from 'src/stores/ItemStore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartPageComponent,
    ItemPageComponent,
    NavbarComponent,
    FooterComponent,
    CardItemComponent,
    SpinnerCircleComponent,
    NumberPickerComponent,
    EditableNumberFieldComponent,
    EditableTextFieldComponent,
    EditableTextAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ItemStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
