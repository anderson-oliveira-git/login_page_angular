import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})

export class DefaultLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryButton: string = '';
  @Input() secondaryButton: string = '';
  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
