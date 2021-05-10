import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.css']
})
export class ViewquestionsComponent implements OnInit {

  public questionslist: Array<any>= new Array<any>();
  constructor() { }

  ngOnInit() {
    var j = 0, k = 0;
    for(var i = 0; i< 20; i++){
      if(i == i%2){this.questionslist.push("science question "+j); j++;}
      else{ this.questionslist.push("Maths question "+k); k++;}
    }
  }

}
