import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Header } from '../../../components/header/header'
import { FormSignUpComponent } from "../form-sign-up-component/form-sign-up-component";

@Component({
  selector: 'app-sign-up-component',
  standalone: true,
  imports: [Header, FormSignUpComponent],
  templateUrl: './sign-up-component.html',
})
export class SignUpComponent {

  

}
