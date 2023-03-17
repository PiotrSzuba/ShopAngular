import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-editable-text-field',
  templateUrl: './editableTextField.component.html',
  styleUrls: ['./editableTextField.component.css'],
})
export class EditableTextFieldComponent {
  @Input() editable = true;
  @Input() value!: string;
  @Input() border = false;
  @Input() error = false;
  @Input() errorMessage = '';
  @Input() placeholder = '';
  @Input() onBlur: undefined | (() => void);
  @Input() validate: undefined | ((value: string) => boolean);
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  getClass() {
    if (this.border && !this.error) return 'input-border';
    if (this.border && this.error) return 'input-border-error';

    return 'input';
  }

  onChange(newValue: string) {
    if (!this.validate) {
      this.valueChange.emit(newValue);
      return;
    }

    if (!this.validate(newValue)) {
      const val = newValue.slice(0, -1);
      this.input.nativeElement.value = val;
      this.valueChange.emit(val);
      return;
    }
    this.valueChange.emit(newValue);
  }

  onConfirm() {
    this.input.nativeElement.blur();
  }

  handleBlur() {
    if (!this.onBlur) return;
    this.onBlur();
  }
}
