import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home-component/home-component'
import { FormLogin } from './pages/Login/form-login/form-login';
import { SignUpComponent } from './pages/SignUp/sign-up-component/sign-up-component'
import { DashboardPageComponent } from './pages/Dashboard/dashboard-page-component/dashboard-page-component';
import { AccesPageComponent } from './pages/Access/acces-page-component/acces-page-component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: FormLogin},
    { path: 'signup', component: SignUpComponent},
    { path: 'dashboard', component: DashboardPageComponent},
    { path: 'access', component: AccesPageComponent}

];
