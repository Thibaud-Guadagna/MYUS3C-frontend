import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BlackButtonComponent } from '../black-button/black-button';
import { RedButtonComponent } from '../red-button/red-button';

@Component({
  selector: 'app-doublebutton',
  standalone: true,
  imports: [BlackButtonComponent, RedButtonComponent],
  templateUrl: './doublebutton.html',
  
})
export class DoublebuttonComponent {
  constructor(private router: Router) {} //Constructor = À la construction du composant je veux que tu me donnes le service router dans une propriété privée(c'est à dire disponible uniquement dans CE composant), que je pourrait utiliser dans ma classe DoublebuttonComponent
  handleRedClick() {
    this.router.navigate(['/login'])
  }
  handleBlackClick() {
		this.router.navigate(["/signup"]);
	}
}

