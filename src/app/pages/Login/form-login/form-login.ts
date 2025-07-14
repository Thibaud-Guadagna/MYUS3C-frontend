import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // FormBuilder: permet de créer rapidement des formulaires, FormGroup: représente un groupe de champs de formulaire, Validators: ensembles de règles de validation
import { HttpClient } from '@angular/common/http';


import { Header } from '../../../components/header/header';
import { RedButtonComponent } from '../../../components/red-button/red-button';


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, Header, RedButtonComponent],
  templateUrl: './form-login.html',

})
export class FormLogin implements OnInit { // cette ligne indique la class FormLogin devra respectrer l'interface de OnInit
  loginForm!: FormGroup
  constructor (private fb: FormBuilder, private http: HttpClient) {}
  
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
    
    
    // Envoie une requête POST vers l'API backend avec les données du formulaire
    this.http.post('http://localhost:3000/api/auth/signin', formValues) // (équivalent de fetch('...', { method: 'POST', body: JSON.stringify(formValues) }) en React)
    .subscribe({//  Démarre réellement la requête HTTP (équivalent du .then() en React)
      next:(response) => {// Réponse reçue avec succès (comme le 2e .then(data => ...))
        console.log('✅ Utilisateur connecté', response);
        //emplacement du AuthService
      },
      error: (error) => {
        console.error('❌ Erreur lors de la Connexion', error)
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
