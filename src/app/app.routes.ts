import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home-component/home-component'
import { FormLogin } from './pages/Login/form-login/form-login';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: FormLogin},
    //{ path: 'dashboard', redirectTo: '/dashboard'}

];
