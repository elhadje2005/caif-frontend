import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blog="";
rep="";
  constructor() { }
getBlog1(){
  this.blog="ok";
}
getBlog2(){
  this.blog="ok2";
}
getBlog3(){
  this.blog="ok3";
}
getHr(){
    this.rep="hr";
  }
getCr(){
    this.rep="cr";
  }
getF(){
    this.rep="f";
  }
  ngOnInit() {
  }

}
