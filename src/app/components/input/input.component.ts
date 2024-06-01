import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

type InputTypes = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = 'text';
  @Input() inputName: string = '';
  @Input() placeholder?: string = '';
  @Input() label: string = '';
  @Input() icon?: string = '';

  value: string = '';

  onChange: any = () => {

  }

  onTouched: any = () => {

  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
