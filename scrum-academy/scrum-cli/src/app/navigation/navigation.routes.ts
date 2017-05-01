import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './dashboard/create-project/create-project.component';
import { ProjectComponent } from './dashboard/project/project.component';

export const NAVIGATION_ROUTES: Routes = [
   { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ },

    { path: 'projects', component: DashboardComponent },
    { path: 'projects/new', component: CreateProjectComponent },
    { path: 'projects/:id', component: ProjectComponent  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(NAVIGATION_ROUTES);