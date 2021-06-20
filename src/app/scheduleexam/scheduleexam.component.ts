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
  selectedquestionsfromchapters = [];
  questionsfromchapter = [];
  selectedquestionsfromright = [];
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
	this.questionsfromchapter = [
		"Q.1: Use Euclid’s division lemma to show that the square of any positive integer is either of the form 3m or 3m + 1 for some integer m.",
		"Q.2: Express each number as a product of its prime factors:",
		"Q.3: Given that HCF (306, 657) = 9, find LCM (306, 657).",
		"Q.4: Prove that 3 + 2√5 is irrational.",
		"Q.5: Without actually performing the long division, state whether the following rational numbers will have a terminating decimal expansion or a non-terminating repeating decimal expansion:",
		"Q.6: The following real numbers have decimal expansions as given below. In each case, decide whether they are rational or not. If they are rational, and of the form, p/q what can you say about the prime factors of q?",
		"Q.7: Check whether 6n can end with the digit 0 for any natural number n.",
		"Q.1: Use Euclid’s division lemma to show that the square of any positive integer is either of the form 3m or 3m + 1 for some integer m.",
		"Q.2: Express each number as a product of its prime factors:",
		"Q.3: Given that HCF (306, 657) = 9, find LCM (306, 657).",
		"Q.4: Prove that 3 + 2√5 is irrational.",
		"Q.5: Without actually performing the long division, state whether the following rational numbers will have a terminating decimal expansion or a non-terminating repeating decimal expansion:",
		"Q.6: The following real numbers have decimal expansions as given below. In each case, decide whether they are rational or not. If they are rational, and of the form, p/q what can you say about the prime factors of q?",
		"Q.7: Check whether 6n can end with the digit 0 for any natural number n.",
		"Q.1: Use Euclid’s division lemma to show that the square of any positive integer is either of the form 3m or 3m + 1 for some integer m.",
		"Q.2: Express each number as a product of its prime factors:",
		"Q.3: Given that HCF (306, 657) = 9, find LCM (306, 657).",
		"Q.4: Prove that 3 + 2√5 is irrational.",
		"Q.5: Without actually performing the long division, state whether the following rational numbers will have a terminating decimal expansion or a non-terminating repeating decimal expansion:",
		"Q.6: The following real numbers have decimal expansions as given below. In each case, decide whether they are rational or not. If they are rational, and of the form, p/q what can you say about the prime factors of q?",
		"Q.7: Check whether 6n can end with the digit 0 for any natural number n.",
		];
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

  moveselectequestion()
  {
	this.selectedquestionsfromright.forEach((question, index)=>{
		if(this.selectedquestionsfromchapters.indexOf(question) !== index){
			this.selectedquestionsfromchapters.push(question);
		}
	});
  }

  removequestionfromselected(question)
  {
	this.selectedquestionsfromchapters = this.selectedquestionsfromchapters.filter((item, index)=> {
		return this.selectedquestionsfromchapters.indexOf(question) !== index;
	});
  }

  selecteditems(question)
  {
	var exist = this.selectedquestionsfromright.includes(question);
	if(!exist)
	{
		this.selectedquestionsfromright.push(question);
	}
	else {
		this.selectedquestionsfromright = this.selectedquestionsfromright.filter((item, index)=> {
			return this.selectedquestionsfromright.indexOf(question) !== index;
		});
	}
  }
}
