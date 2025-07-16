import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    mail: string;
    is_admin: boolean;
    is_actif: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth/signin';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // création d'un state équivalent de const=[connected, setConnected]. BehaviorSubject est comme un useState qui peut être partagé entre plusieurs composants initalisé à false de base
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable()//isLoggedIn$ est une propriété publique de type observable qui émet des valeurs de type boolean (true ou false. Elle est créée à partir de isLoggedInSubject, mais en lecture seule, grâce à .asObservable(). Cela permet d’écouter l’état de connexion sans pouvoir le modifier depuis l’extérieur du service.
  private tokenKey = "auth_token"

  constructor( private http: HttpClient) {
    //vérification à la construction s'il existe un token 
    const token = localStorage.getItem(this.tokenKey);
    this.isLoggedInSubject.next(!!token)//true si token trouvé, sinon false 
  }

  login(formValues: {email: string, password: string}) {
    return this.http.post<AuthResponse>(this.apiUrl, formValues).pipe(//équivalent du .then() syntaxe propre à angular 
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.token)//je met le token en localstorage
        this.isLoggedInSubject.next(true)
      })
    )
}
}
