import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { CreateProjectComponent } from './navigation/dashboard/create-project/create-project.component';
import { ProjectComponent } from './navigation/dashboard/project/project.component';
import { NAVIGATION_ROUTES } from './navigation/navigation.routes';
import { TeamsComponent } from './navigation/teams/teams.component';

export const routes: Routes = [
   // { path: '', component: LoginComponent/*, canActivate: [AuthGuard]*/ },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '', component: NavigationComponent,  children: NAVIGATION_ROUTES}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);