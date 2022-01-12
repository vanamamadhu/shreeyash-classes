import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  form: FormGroup;
  fname: string =null;
  constructor(private router: Router,private notifyService : NotificationService, 
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lasttname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: [null, Validators.required],
      usertype: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', [Validators.required]],
      standard: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });
  }
  get formval(){
    return this.form.controls;
  }
  onSubmit(){
    if(this.form.invalid){
      this.notifyService.showError("Please enter correct username/password", "Invalid Credentials")
    }
    this.notifyService.showSuccess("","Success!");
  }
  backtologin(){
    this.router.navigate(['/login']);
  }

}
