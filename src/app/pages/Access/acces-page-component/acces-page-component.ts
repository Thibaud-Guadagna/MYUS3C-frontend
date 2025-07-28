import { HttpClient } from "@angular/common/http";
import { Header } from "../../../components/header/header";
import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { DoublebuttonComponent } from "../../../components/doublebutton/doublebutton";
import { BlackButtonComponent } from "../../../components/black-button/black-button";
import { RedButtonComponent } from "../../../components/red-button/red-button";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../services/auth-service";

type WaitingUser = {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
	license_number: string;
	trained_category_name: string;
};
type NewUser = {
	firstname: string;
	lastname: string;
	email: string;
	passHash: string;
	is_superadmin: boolean;
	is_admin: boolean;
	is_active: boolean;
};

@Component({
	selector: "app-acces-page-component",
	standalone: true,
	imports: [Header, BlackButtonComponent, RedButtonComponent, CommonModule],
	templateUrl: "./acces-page-component.html",
})
export class AccesPageComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private authService: AuthService,
	) {}
	private waitingListInfoUrl = `${environment.apiUrl}/waiting-list-info`;
	public waitingUsers: WaitingUser[] = [];
	public selectedUser: WaitingUser | null = null;

	ngOnInit(): void {
		this.waintingListInfo();
	}
	waintingListInfo(): void {
		this.http
			.get<WaitingUser[]>(this.waitingListInfoUrl)
			.subscribe((waitingUsers) => {
				if (waitingUsers.length > 0) {
					this.waitingUsers = waitingUsers;
					this.selectedUser = waitingUsers[0];
				}
				console.log(waitingUsers);
			});
	}
	acceptClick(): void {
		if (this.selectedUser) {
      const userId = this.selectedUser.id
			this.authService.signUp(this.selectedUser.id);
      this.waitingUsers = this.waitingUsers.filter(
				(user) => user.id !== userId,
			);

			// ➕ Réaffecte le prochain utilisateur sélectionné s'il en reste
			this.selectedUser =
				this.waitingUsers.length > 0 ? this.waitingUsers[0] : null;
		}
		return;
	}

	denyClick(): void {
		if (this.selectedUser) {
			const userId = this.selectedUser.id;

			this.authService.deleteWaitingUser(userId);

			// ➕ Mise à jour dynamique du tableau
			this.waitingUsers = this.waitingUsers.filter(
				(user) => user.id !== userId,
			);

			// ➕ Réaffecte le prochain utilisateur sélectionné s'il en reste
			this.selectedUser =
				this.waitingUsers.length > 0 ? this.waitingUsers[0] : null;
		}
    return;
	}
}
