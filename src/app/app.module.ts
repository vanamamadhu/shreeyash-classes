import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';
import { ScheduleexamComponent } from './scheduleexam/scheduleexam.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';
import { UDashboardComponent } from './userdashboard/dashboard/dashboard.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { ApplicationConstants } from './constants.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NewuserComponent } from './newuser/newuser.component';

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
    UseraccountComponent,
    NewuserComponent,
  ],
  exports: [
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularDualListBoxModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    ApplicationConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
