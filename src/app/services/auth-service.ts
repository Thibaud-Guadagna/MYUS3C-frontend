import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "../../environments/environment";
import Toastify from "toastify-js";
import emailjs from "emailjs-com";

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
	providedIn: "root",
})
export class AuthService {
	private signInUrl = `${environment.apiUrl}/auth/signin`;
	private askUrl = `${environment.apiUrl}/auth/ask-access`;
	private signUpUrl = `${environment.apiUrl}/auth/signup`;

	private isLoggedInSubject = new BehaviorSubject<boolean>(false); //
	public isLoggedIn$: Observable<boolean> =
		this.isLoggedInSubject.asObservable(); //
	private tokenKey = "auth_token";

	constructor(private http: HttpClient) {
		//vérification à la construction s'il existe un token
		const token = localStorage.getItem(this.tokenKey);
		this.isLoggedInSubject.next(!!token); //true si token trouvé, sinon false
	}

	login(formValues: { email: string; password: string }) {
		return this.http.post<AuthResponse>(this.signInUrl, formValues).pipe(
			tap((response) => {
				localStorage.setItem(this.tokenKey, response.token);
				localStorage.setItem("UserFirstName", response.user.firstname);
				this.isLoggedInSubject.next(true);
			}),
		);
	}
	askAccess(formValues: {
		firstname: string;
		lastname: string;
		license_number: string;
		email: string;
		password: string;
		trained_category_id: number;
	}) {
		return this.http.post(this.askUrl, formValues).pipe(
			tap(() => {
				Toastify({
					text: "Demande envoyée avec succès ✅",
					duration: 3000,
					close: true,
					gravity: "top",
					position: "right",
					backgroundColor: "#4CAF50",
				}).showToast();
				emailjs.send(
					environment.emailjsServiceId,
					environment.emailjsTemplateId,
					{
						firstname: formValues.firstname,
						email: formValues.email,
					},
					environment.emailjsPublicKey,
				);
			}),
		);
	}
	signUp(waitingUserId: number): void {
		this.http.post(this.signUpUrl, { waitingUserId }).subscribe();
	}
	deleteWaitingUser(userId: number): void {
		this.http
			.delete(`${environment.apiUrl}/waiting-user/${userId}`)
			.subscribe();
	}
}
