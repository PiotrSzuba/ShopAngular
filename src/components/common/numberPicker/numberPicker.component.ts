import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-picker',
  templateUrl: './numberPicker.component.html',
})
export class NumberPickerComponent {
  @Input() minValue = Number.MIN_SAFE_INTEGER;
  @Input() maxValue = Number.MAX_SAFE_INTEGER;
  @Input() value = 0;

  public changeUp = () => {
    if (this.value + 1 > this.maxValue) return;
    this.value += 1;
  };

  public changeDown = () => {
    if (this.value - 1 < this.minValue) return;
    this.value -= 1;
  };
}
