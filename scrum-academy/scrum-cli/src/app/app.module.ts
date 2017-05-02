import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { ProjectComponent } from './navigation/dashboard/project/project.component';
import { CreateProjectComponent } from './navigation/dashboard/create-project/create-project.component';
import { routing } from './app.routes';
import { ProjectListComponent } from './navigation/dashboard/project/project-list/project-list.component';
import { ProjectItemComponent } from './navigation/dashboard/project/project-list/project-item.component';
import { ProjectDetailComponent } from './navigation/dashboard/project/project-detail/project-detail.component';
import { TeamsComponent } from './navigation/teams/teams.component';
import { UserStoriesComponent } from './navigation/user-stories/user-stories.component';
import { QuestionsComponent } from './navigation/questions/questions.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { TeamsItemComponent } from './navigation/teams/teams-item/teams-item.component';
import { QuestionsListComponent } from './navigation/questions/questions-list/questions-list.component';
import { QuestionsItemComponent } from './navigation/questions/questions-list/questions-item.component';
import { QuestionsDetailComponent } from './navigation/questions/questions-detail/questions-detail.component';
import { UserStoriesDetailComponent } from './navigation/user-stories/user-stories-detail/user-stories-detail.component';
import { UserStoriesListComponent } from './navigation/user-stories/user-stories-list/user-stories-list.component';
import { UserStoriesItemComponent } from './navigation/user-stories/user-stories-list/user-stories-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    DashboardComponent,
    ProjectComponent,
    CreateProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    TeamsComponent,
    UserStoriesComponent,
    QuestionsComponent,
    ProfileComponent,
    TeamsItemComponent,
    QuestionsListComponent,
    QuestionsItemComponent,
    QuestionsDetailComponent,
    UserStoriesDetailComponent,
    UserStoriesListComponent,
    UserStoriesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    HttpModule,
    CommonModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
