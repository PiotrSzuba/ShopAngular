import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar';
import { HomeComponent, CartPageComponent } from 'src/pages';
import { CardItemComponent } from 'src/components/cardItem';
import {
  SpinnerCircleComponent,
  NumberPickerComponent,
  EditableNumberFieldComponent,
  EditableTextFieldComponent,
  EditableTextAreaComponent,
} from 'src/components/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartPageComponent,
    NavbarComponent,
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
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
