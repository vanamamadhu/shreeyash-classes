import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';

@Component({
  selector: 'app-scheduleexam',
  templateUrl: './scheduleexam.component.html',
  styleUrls: ['./scheduleexam.component.css']
})
export class ScheduleexamComponent implements OnInit {
  selectTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  selectedDate: NgbDateStruct;
 
  constructor() { }

  ngOnInit() {
    //this.selectedTime = {hour: 13, minute: 30, second: 0};
  }  
}
