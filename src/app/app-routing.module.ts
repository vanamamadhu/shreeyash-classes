import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ScheduleexamComponent } from './scheduleexam/scheduleexam.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { UDashboardComponent } from './userdashboard/dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: "userdashboard", component: UserdashboardComponent,
    children: [
      { path: '', component:UDashboardComponent},
      { path: 'dashboard', component:UDashboardComponent},
      { path: 'useraccount', component: UseraccountComponent},
    ]
  },
  { path: "login", component: LoginComponent},
  { 
    path: "admindashboard", component: AdmindashboardComponent,
    children: [
      { path: '', component:DashboardComponent},
      { path: "dashboard", component: DashboardComponent},
      { path: "scheduleexam", component: ScheduleexamComponent},
      { path: "addquestions", component: AddquestionsComponent},
      { path: "viewquestion", component: ViewquestionsComponent},
    ]
  },
  { path: 'newuser', component: NewuserComponent},
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
