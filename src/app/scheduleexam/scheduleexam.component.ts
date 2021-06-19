import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';
import { ApplicationConstants } from '../constants.component';
import { NotificationService } from '../services/notification.service';

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
  chapters = [];
  questionsForChaptyer = [];
  isNext :boolean = false;
  isBack :boolean = true;
  selectedBatch: any = "";
  selectedStandard: any = "";
  constructor(private appconstants:ApplicationConstants,private notifyService : NotificationService) { }
  languages: Array<string> = this.appconstants.languages;
  ngOnInit() {
	this.batches = this.appconstants.batches;
	this.standard = this.appconstants.standard;
	this.selectedbatchmembers = ["madhusudhan","rao","mohan","ramesh","nagu","arjun lerin suravaram",
	"madhusudhan","rao","mohan","ramesh","nagu","madhusudhan","rao","mohan","ramesh","nagu","madhusudhan","rao","mohan","ramesh","nagu","madhusudhan","rao","mohan","ramesh","nagu",
	"madhusudhan","rao","mohan","ramesh","nagu","madhusudhan","rao","mohan","ramesh","nagu","madhusudhan","rao","mohan","ramesh","nagu"]
  }  

  refreshSourceData(){
    this.questionsForChaptyer = [];
  }

  onStandardSelect(standard) {

	if(this.selectedStandard !="" && this.selectedStandard != null){
		this.chapters = this.getChaptersBasedonStandard(this.selectedStandard);
	}
  }
  onBatchSelect(event) {
	  if(this.selectedStandard != "" && this.selectedStandard != null){
		this.selectedbatchmembers = this.getBatchDetail(this.selectedBatch);
	  }
	  else {
		this.notifyService.showError("Please select standard", "Standard Missing")
		this.selectedBatch = {id:-1,Name:'Select Standard'};;
	  }
  }

  getChaptersBasedonStandard(standard)
  {
	  if(standard != null && standard != "") {
		return ["Chapter 1","Chapter 2","Chapter 3","Chapter 4","Chapter 5","Chapter 6"]
	  }
	  else {
		  return [];
	  }
  }
  getBatchDetail(batchName)
  {
	  var batchmemberslist = [];
	  if(batchName != null && batchName != ""){
		batchmemberslist = this.selectedbatchmembers;
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

  removeFromBatch(item)
  {
	  alert(item)
  }
}
