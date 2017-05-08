import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';


import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './dashboard/create-project/create-project.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { TeamsComponent } from './teams/teams.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsDetailComponent } from './questions/questions-detail/questions-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectDetailComponent } from './dashboard/project/project-detail/project-detail.component';
import { IsAuthenticatedService } from './is-authenticated.service';

export const routes: Routes = [
   // { path: '', component: LoginComponent/*, canActivate: [AuthGuard]*/ },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //Novas
    { path: 'projects', component: DashboardComponent },
    { path: 'projects/new', component: CreateProjectComponent },
    { path: 'projects/:id/userstories', component: UserStoriesComponent }, //depois de criar projecto
    { path: 'projects/:id', component: ProjectDetailComponent },


    { path: 'teams', component: TeamsComponent, canActivate: [ IsAuthenticatedService ] },
    { path: 'userstories', component: UserStoriesComponent, canActivate: [ IsAuthenticatedService ] }, // tab direto
    { path: 'questions', component: QuestionsComponent, canActivate: [ IsAuthenticatedService ] },
    //{ path: 'questions/:id', component: QuestionsDetailComponent },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [ IsAuthenticatedService ] },
    //{ path: 'profile/:id', component: ProfileComponent },

    { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);