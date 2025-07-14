import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-button',
  standalone: true,
  imports: [],
  templateUrl: './red-button.html',
})
export class RedButtonComponent {
  @Input({
    required: true
  }) name: string = '';

}
