import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courscap',
  templateUrl: './courscap.component.html',
  styleUrls: ['./courscap.component.css']
})
export class CourscapComponent implements OnInit {
  part="";
  constructor() { }
  getP1(){
    this.part="ok1"
  }
  getP2(){
    this.part="ok2"
  }
  getP3(){
    this.part="ok3"
  }
  getP4(){
    this.part="ok4"
  }
  getP5(){
    this.part="ok5"
  }
  ngOnInit() {
  }

}
