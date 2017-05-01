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
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, canActivate: [AuthGuard] },
      {path: 'app-login', component: LoginComponent},
      {path: 'app-register', component: RegisterComponent},
      {path: 'app-home', component: HomeComponent},
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
