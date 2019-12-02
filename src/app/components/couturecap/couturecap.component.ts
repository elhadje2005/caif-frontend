import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couturecap',
  templateUrl: './couturecap.component.html',
  styleUrls: ['./couturecap.component.css']
})
export class CouturecapComponent implements OnInit {
  testcours1="";
  testcours2="";
  part="";
  testcours11="";
  testcours21="";
  part1="";
  testcours12="";
  testcours22="";
  part2="";
    constructor() { }
  
    ngOnInit() {
    }
    //First panel
    getCours(){
      this.testcours1="ok";
      this.testcours2="quit";
    }
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
  
    //Second panel
    getCours1(){
      this.testcours11="ok";
      this.testcours21="quit";
    }
    getP11(){
      this.part1="ok1"
    }
    getP21(){
      this.part1="ok2"
    }
    getP31(){
      this.part1="ok3"
    }
    getP41(){
      this.part1="ok4"
    }
    getP51(){
      this.part1="ok5"
    }
  
    //Third panel
    getCours2(){
      this.testcours12="ok";
      this.testcours22="quit";
    }
    getP12(){
      this.part2="ok1"
    }
    getP22(){
      this.part2="ok2"
    }
    getP32(){
      this.part2="ok3"
    }
    getP42(){
      this.part2="ok4"
    }
    getP52(){
      this.part2="ok5"
    }
  
  }
  