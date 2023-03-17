import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-editable-number-field',
  templateUrl: './editableNumberField.component.html',
})
export class EditableNumberFieldComponent implements OnInit, OnChanges {
  @Input()
  value!: number;
  @Input() defaultValue = 0;
  @Output() valueChange = new EventEmitter<number>();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  editMode = true;
  valueStr = '';

  ngOnInit(): void {
    this.valueStr = this.value.toString();
  }

  onChange(newValue: string) {
    if (!newValue) {
      this.valueStr = '';
      this.input.nativeElement.value = this.valueStr;
      this.value = this.defaultValue;
      this.valueChange.emit(this.value);
      return;
    }
    const regex = new RegExp(/^[0-9]\d*$/);
    if (!regex.test(newValue)) {
      this.input.nativeElement.value = this.valueStr
        ? this.value.toString()
        : '';
      return;
    }
    if (newValue.length > 2) {
      this.value = parseInt(newValue.substring(0, 2));
    } else {
      this.value = parseInt(newValue);
    }
    this.valueStr = this.value.toString();
    this.input.nativeElement.value = this.valueStr;
    this.valueChange.emit(this.value);
  }

  onBlur() {
    if (this.valueStr) return;
    this.value = this.defaultValue;
    this.valueStr = this.defaultValue.toString();
    this.valueChange.emit(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.valueStr) return;
    this.valueStr = changes['value'].currentValue;
  }
}
