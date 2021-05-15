import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';
import { ScheduleexamComponent } from './scheduleexam/scheduleexam.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';
import { UDashboardComponent } from './userdashboard/dashboard/dashboard.component';
import { UseraccountComponent } from './useraccount/useraccount.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    AddquestionsComponent,
    ViewquestionsComponent,
    ScheduleexamComponent,
    AdmindashboardComponent,
    LoginComponent,
    DashboardComponent,
    UDashboardComponent,
    UseraccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
