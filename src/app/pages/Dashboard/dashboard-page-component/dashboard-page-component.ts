import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Header } from "../../../components/header/header";
import { AuthResponse, AuthService } from "../../../services/auth-service";
import { NavigationComponent } from "../navigation-component/navigation-component";
import { ResultsComponent } from "../results-component/results-component";
import { UpperCasePipe } from "@angular/common";


type User = {
	firstName: string;
};

@Component({
	selector: "app-dashboard-page-component",
	standalone: true,
	imports: [Header, NavigationComponent, ResultsComponent, UpperCasePipe],
	templateUrl: "./dashboard-page-component.html",
})
export class DashboardPageComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private http: HttpClient,
		
	) {}

	public firstName: string | null = null;
	private waitingUrl = `${environment.apiUrl}/waiting-list`
	ngOnInit(): void {
		this.firstName = localStorage.getItem("UserFirstName");
		this.firstName?.toUpperCase;
		
	}
	
	
}
