import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitrecap',
  templateUrl: './chapitrecap.component.html',
  styleUrls: ['./chapitrecap.component.css']
})
export class ChapitrecapComponent implements OnInit {

  rep="";


  constructor() { }
  getCoupeCouture(){
    this.rep="coupeCouture";
  }
  getDessinDeMode(){
    this.rep="dessinDeMode";
  }
  getArtisanat(){
    this.rep="artisanat";
  }  ngOnInit() {
  }

}
