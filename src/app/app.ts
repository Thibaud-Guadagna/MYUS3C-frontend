import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { Routes } from '@angular/router'
import { provideRouter } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  template: `<router-outlet />`,

})
export class App {
  
}
// Note: Ensure that the imports are correctly set up in your project structure.

