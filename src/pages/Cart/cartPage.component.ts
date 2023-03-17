import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cartPage.component.html',
})
export class CartPageComponent {
  value = '';
  taValue = '';

  validate(value: string): boolean {
    const regex = new RegExp(/^[0-9]\d*$/);
    if (!regex.test(value) || value.length > 2) return false;

    return true;
  }
}
