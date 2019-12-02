import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {
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
  }
  ngOnInit() {
  }

}
