import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { BlackButtonComponent } from '../../../components/black-button/black-button';

interface Category {
  name: string
}
@Component({
  selector: 'app-form-sign-up-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, BlackButtonComponent], 
  templateUrl: './form-sign-up-component.html',
 
})
export class FormSignUpComponent implements OnInit{
  
  signUpForm!: FormGroup

  constructor(
    private fb:FormBuilder,
   
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      licenseId:['', [Validators.required]],
      categoryTrained:[Selection, [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      categoryIndex:[null]
    })
  }
 categoryName: Category[] = [
  { name: 'U6'},
  { name: 'U7'},
  { name: 'U8' },
  { name: 'U9' },
  { name: 'U10' },
  { name: 'U11' },
  { name: 'U12' },
  { name: 'U13' },
  { name: 'U14' },
  { name: 'U15' },
  { name: 'U16' },
  { name: 'U17' },
  { name: 'U18' },
  { name: 'Senior' }
 ];
}
