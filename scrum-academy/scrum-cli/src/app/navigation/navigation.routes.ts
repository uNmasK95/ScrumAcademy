import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './dashboard/create-project/create-project.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { TeamsComponent } from './teams/teams.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { QuestionsComponent } from './questions/questions.component';

export const NAVIGATION_ROUTES: Routes = [

    { path: 'projects', component: DashboardComponent },
    { path: 'projects/new', component: CreateProjectComponent },
    { path: 'projects/:id', component: ProjectComponent },
    { path: 'projects/:id/userstories', component: UserStoriesComponent },


    { path: 'teams', component: TeamsComponent },

    { path: 'userstories', component: UserStoriesComponent },

    { path: 'questions', component: QuestionsComponent },
    { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(NAVIGATION_ROUTES);