// biome-ignore lint/style/useImportType: fakse positive
import { Component, OnInit } from '@angular/core';
// biome-ignore lint/style/useImportType: false positive
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // FormBuilder: permet de créer rapidement des formulaires, FormGroup: représente un groupe de champs de formulaire, Validators: ensembles de règles de validation


import { Header } from '../../../components/header/header';
import { RedButtonComponent } from '../../../components/red-button/red-button';
// biome-ignore lint/style/useImportType: false positive
import { AuthService } from '../../../services/auth-service';
// biome-ignore lint/style/useImportType: false positive
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, Header, RedButtonComponent],
  templateUrl: './form-login.html',

})
export class FormLogin implements OnInit { // cette ligne indique la class FormLogin devra respectrer l'interface de OnInit
  loginForm!: FormGroup
  constructor (
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void { //Méthode spéciale d'Angular automatiquement appelée une seule au moment de l'intialisation du composant et définie parce que ma classe implémente OnInit
    this.loginForm = this.fb.group({//création du formulaire réactif que l'on affecte à la variable fb qui signie 'FormBuilder' Group sert à créer un ensemble de règles qui s'appliquent aux champs du formulaire
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
      //ici on dit : je veux deux champs obligatoires : email et password et email doit avoir le format d'adresse mail c'est natif à angular via le "validator" importé il vérifie qu'il y a un @ et un domaine dans le champs du formulaire
    })
  }
  login(): void {
    if (this.loginForm.invalid) return;//si les valeurs du formulaires sont pas valides arrêt de la fonction

    const formValues = this.loginForm.value // je récupère les valeurs renseignées par l'utilisateur dans le formulaire dans la variable formValues

     this.authService.login(formValues).subscribe({
    next: () => {
      console.log('✅ Connexion réussie');
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error('❌ Erreur lors de la connexion', err);
    }
  });
}

  
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulaire Valide', this.loginForm.value)
    } else {
      console.log('Formulaire invalide')
    }
  }

}
