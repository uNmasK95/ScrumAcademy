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
import { ProfileComponent } from './profile/profile.component';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { SprintsComponent } from "app/sprints/sprints.component";
import { SprintCreateComponent } from "app/sprints/sprint-create/sprint-create.component";
import { SprintsUserStoriesTasksComponent } from "app/sprints/sprints-user-stories-tasks/sprints-user-stories-tasks.component";
import { LoginGuardService } from './services/login-guard.service';
import { TeamsCreateComponent } from "app/teams/teams-create/teams-create.component";
import { UserStoriesDashboardComponent } from "app/user-stories/user-stories-dashboard/user-stories-dashboard.component";

export const routes: Routes = [
   // { path: '', component: LoginComponent/*, canActivate: [AuthGuard]*/ },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
    { path: 'register', component: RegisterComponent, canActivate: [LoginGuardService] },

    //Novas
    { path: 'projects', component: DashboardComponent },
    { path: 'projects/new', component: CreateProjectComponent },
    { path: 'projects/:id/userstories', component: UserStoriesComponent }, //para PO

    { path: 'projects/:id/sprints', component: SprintsComponent }, //para SM (estes acho que tem de ter um canActivate)
    { path: 'projects/:id/sprints/new', component: SprintCreateComponent }, //para SM //mudar comp
    { path: 'projects/:id/sprints/:id2', component: SprintsUserStoriesTasksComponent }, //para SM //mudar comp

    { path: 'projects/:id', component: UserStoriesDashboardComponent }, //para Dev    

    { path: 'teams', component: TeamsComponent, canActivate: [ IsAuthenticatedService ] },
    { path: 'teams/new', component: TeamsCreateComponent, canActivate: [ IsAuthenticatedService ] }, //Para SM
    { path: 'userstories', component: UserStoriesComponent, canActivate: [ IsAuthenticatedService ] }, // tab direto
    { path: 'questions', component: QuestionsComponent, canActivate: [ IsAuthenticatedService ] },
    //{ path: 'questions/:id', component: QuestionsDetailComponent },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [ IsAuthenticatedService ] },
    //{ path: 'profile/:id', component: ProfileComponent },

    { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);