import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [],
  templateUrl: './navigation-component.html',

})
export class NavigationComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  private waitingUrl = `${environment.apiUrl}/waiting-list`
  public waitingCount: number =0;

  ngOnInit(): void {
    this.waitingIndicator()
  }
  
  waitingIndicator(): void {
		this.http.get<{ count: number }>(this.waitingUrl)
    .pipe(map((response) => response.count))
    .subscribe((count) => {
      this.waitingCount = count
    })
      
		return;
	}
  handleClick() {
    this.router.navigate(['/access'])
  }

}
