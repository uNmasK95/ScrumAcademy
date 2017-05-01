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

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    DashboardComponent,
    ProjectComponent,
    CreateProjectComponent
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
