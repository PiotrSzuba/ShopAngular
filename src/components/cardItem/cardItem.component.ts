import { Component, Input } from '@angular/core';
import { IItem } from 'src/Types';
import { formatDecimal } from 'src/helpers';

@Component({
  selector: 'app-card-item',
  templateUrl: './cardItem.component.html',
})
export class CardItemComponent {
  @Input() item: IItem | undefined = undefined;

  public formatDecimal = (price: number) => formatDecimal(price);
}
