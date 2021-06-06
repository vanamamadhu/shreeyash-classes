import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';
import { ApplicationConstants } from '../constants.component';

@Component({
  selector: 'app-scheduleexam',
  templateUrl: './scheduleexam.component.html',
  styleUrls: ['./scheduleexam.component.css']
})
export class ScheduleexamComponent implements OnInit {
  selectTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  selectedDate: NgbDateStruct;
  static tube:Array<string> = [
		"Harrow & Wealdstone",
		"Kenton",
		"South Kenton",
		"North Wembley",
		"Wembley Central",
		"Stonebridge Park",
		"Harlesden",
		"Willesden Junction",
		"Kensal Green",
		"Queen's Park",
		"Kilburn Park",
		"Maida Vale",
		"Warwick Avenue",
		"Paddington",
		"Edgware Road",
		"Marylebone",
		"Baker Street",
		"Regent's Park",
		"Oxford Circus",
		"Piccadilly Circus",
		"Charing Cross",
		"Embankment",
		"Waterloo",
		"Lambeth North",
		"Elephant & Castle"
	];
  target = [];
	message;
	source = ScheduleexamComponent.tube;
  constructor(private appconstants:ApplicationConstants) { }
  languages: Array<string> = this.appconstants.languages;
  ngOnInit() {
    //this.selectedTime = {hour: 13, minute: 30, second: 0};
  }  
  showMessage(e:any) {
		this.message = { selectChange: e };
    console.log(this.target);
	}

  refreshSourceData(){
    this.source = [];
  }
}
