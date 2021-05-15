import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDatepicker, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scheduleexam',
  templateUrl: './scheduleexam.component.html',
  styleUrls: ['./scheduleexam.component.css']
})
export class ScheduleexamComponent implements OnInit {
  selectedTime: NgbTimeStruct;
  selectedDate: NgbDateStruct;
  date: { year: number, month: number };
  @ViewChild('dp', {static: false}) dp: NgbDatepicker;
 
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    
  }

  selectToday() {
    this.selectedDate = this.calendar.getToday();
  }

  setCurrent() {
    //Current Date
    this.dp.navigateTo()
  }
  setDate() {
    //Set specific date
    this.dp.navigateTo({ year: 2013, month: 2 });
  }

  navigateEvent(event) {
    this.date = event.next;
  }
}
