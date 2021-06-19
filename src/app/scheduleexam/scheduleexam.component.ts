import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';
import { ApplicationConstants } from '../constants.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-scheduleexam',
  templateUrl: './scheduleexam.component.html',
  styleUrls: ['./scheduleexam.component.css']
})
export class ScheduleexamComponent implements OnInit {
  selectTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  selectedDate: NgbDateStruct;
  selectedbatchmembers = [];
  batches =[];
  standard = [];
  isNext :boolean = false;
  isBack :boolean = true;
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
  dropdownSettings: IDropdownSettings;
  selectedBatch: any = "";
  constructor(private appconstants:ApplicationConstants) { }
  languages: Array<string> = this.appconstants.languages;
  ngOnInit() {
	this.batches = this.appconstants.batches;
	this.standard = this.appconstants.standard;
	this.dropdownSettings = {
		singleSelection: false,
		idField: 'item_id',
		textField: 'item_text',
		selectAllText: 'Select All',
		unSelectAllText: 'UnSelect All',
		itemsShowLimit: 3,
		allowSearchFilter: true
	  }; 
  }  
  showMessage(e:any) {
		this.message = { selectChange: e };
    console.log(this.target);
	}

  refreshSourceData(){
    this.source = [];
  }
  onBatchSelect(item: any) {
	  this.selectedbatchmembers = this.getBatchDetail(this.selectedBatch);
  }

  getBatchDetail(batchName)
  {
	  var batchmemberslist = [];
	  if(batchName != null && batchName != ""){
		  //Ajax call to get the batch members list		
	  }
	  return batchmemberslist;
  }
  validateafirstpagedata()
  {
	  var validateIndicater = true;
	  return validateIndicater;
  }
  clickNext()
  {
	if(this.validateafirstpagedata())
	{
		this.isBack = false;
		this.isNext = true;
	}
  }

  clickBack()
  {
	this.isBack = true;
	this.isNext = false;
  }

  validateasecondpagedata()
  {
	  var validateIndicater = false;
	  return validateIndicater;
  }
  scheduleBatchExam()
  {
	  if(this.validateasecondpagedata())
	  {

	  }
  }
}
