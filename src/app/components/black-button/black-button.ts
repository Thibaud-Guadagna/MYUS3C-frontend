import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-black-button',
  imports: [],
  templateUrl: './black-button.html',

})
export class BlackButtonComponent {
  @Input({
    required: true
  }) name: string =''

}
