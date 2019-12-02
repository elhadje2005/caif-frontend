import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitrebep',
  templateUrl: './chapitrebep.component.html',
  styleUrls: ['./chapitrebep.component.css']
})
export class ChapitrebepComponent implements OnInit {
  rep="";

  constructor() { }
  getCuisine(){
    this.rep="cuisine";
  }
  getPatisserie(){
    this.rep="patisserie";
  }
  getServiceBar(){
    this.rep="service";
  }  ngOnInit() {
  }

}
