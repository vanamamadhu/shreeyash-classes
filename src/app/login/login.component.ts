import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  userName: string = null;
  password: string = null;
  constructor(private router: Router,private notifyService : NotificationService) { }
  ngOnInit() {
  }

  login(){
    if(this.userName == "shreeyash" && this.password == "shreeyash"){
      //this.router.navigate(['/admindashboard']);
      this.router.navigate(['/userdashboard']);
    }
    else{
      this.notifyService.showError("Please enter correct username/password", "Invalid Credentials")
    }
  }
}
