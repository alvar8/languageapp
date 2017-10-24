import { Routes } from '@angular/router';
import {IndexComponent} from './index/index.component'
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'login',  component: LoginComponent,  },
    { path: 'signup',  component: SignupComponent,  },
    { path: '**', redirectTo: '' }
];
