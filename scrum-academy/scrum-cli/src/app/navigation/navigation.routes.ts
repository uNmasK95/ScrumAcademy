import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './dashboard/create-project/create-project.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { TeamsComponent } from './teams/teams.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsDetailComponent } from './questions/questions-detail/questions-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectDetailComponent } from './dashboard/project/project-detail/project-detail.component';

export const NAVIGATION_ROUTES: Routes = [

    { path: 'projects', component: DashboardComponent },
    { path: 'projects/new', component: CreateProjectComponent },
    { path: 'projects/:id/userstories', component: UserStoriesComponent },
    { path: 'projects/:id', component: ProjectDetailComponent },


    { path: 'teams', component: TeamsComponent },
    { path: 'userstories', component: UserStoriesComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'questions/:id', component: QuestionsDetailComponent },
    { path: 'profile/:id', component: ProfileComponent },
    //{ path: 'profile/:id', component: ProfileComponent },

    { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(NAVIGATION_ROUTES);