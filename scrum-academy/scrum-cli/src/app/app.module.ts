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
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { CreateProjectComponent } from './dashboard/create-project/create-project.component';
import { routing } from './app.routes';
import { ProjectListComponent } from './dashboard/project/project-list/project-list.component';
import { ProjectItemComponent } from './dashboard/project/project-list/project-item.component';
import { TeamsComponent } from './teams/teams.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProfileComponent } from './profile/profile.component';
import { TeamsItemComponent } from './teams/teams-item/teams-item.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionsItemComponent } from './questions/questions-list/questions-item.component';
import { QuestionsDetailComponent } from './questions/questions-detail/questions-detail.component';
import { UserStoriesDetailComponent } from './user-stories/user-stories-detail/user-stories-detail.component';
import { UserStoriesListComponent } from './user-stories/user-stories-list/user-stories-list.component';
import { UserStoriesItemComponent } from './user-stories/user-stories-list/user-stories-item.component';
import { UserStoriesEditComponent } from './user-stories/user-stories-edit/user-stories-edit.component';
import { UserStoriesNewComponent } from './user-stories/user-stories-new/user-stories-new.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { IsAuthenticatedService } from './is-authenticated.service';
import { HttpUtilService } from './http-util.service';
import { LoginGuardService } from "./login-guard.service";
import { SprintsComponent } from './sprints/sprints.component';
import { SprintsListComponent } from './sprints/sprints-list/sprints-list.component';
import { SprintsItemComponent } from "app/sprints/sprints-list/sprints-item.component";
import { SprintCreateComponent } from './sprints/sprint-create/sprint-create.component';
import { SprintDashboardComponent } from './sprints/sprint-dashboard/sprint-dashboard.component';
import { SprintsUserStoriesListComponent } from './sprints/sprints-user-stories-list/sprints-user-stories-list.component';
import { DaterangepickerModule } from 'angular-2-daterangepicker';
import { SprintsUserStoriesTasksComponent } from './sprints/sprints-user-stories-tasks/sprints-user-stories-tasks.component';
import { SprintsUserStoriesTasksListComponent } from './sprints/sprints-user-stories-tasks/sprints-user-stories-tasks-list/sprints-user-stories-tasks-list.component';
import { SprintsUserStoriesTasksItemComponent } from './sprints/sprints-user-stories-tasks/sprints-user-stories-tasks-item/sprints-user-stories-tasks-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProjectComponent,
    CreateProjectComponent,
    ProjectListComponent,
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
    UserStoriesItemComponent,
    UserStoriesEditComponent,
    UserStoriesNewComponent,
    ProfileEditComponent,
    SprintsComponent,
    SprintsListComponent,
    SprintsItemComponent,
    SprintCreateComponent,
    SprintDashboardComponent,
    SprintsUserStoriesListComponent,
    SprintsUserStoriesTasksComponent,
    SprintsUserStoriesTasksListComponent,
    SprintsUserStoriesTasksItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    HttpModule,
    CommonModule,
    routing,
    HttpModule,
    DaterangepickerModule
  ],
  providers: [
    IsAuthenticatedService,
    LoginGuardService,
    HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
