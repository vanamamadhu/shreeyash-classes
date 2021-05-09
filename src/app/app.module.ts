import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';
import { ScheduleexamComponent } from './scheduleexam/scheduleexam.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    AddquestionsComponent,
    ViewquestionsComponent,
    ScheduleexamComponent,
    AdmindashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
