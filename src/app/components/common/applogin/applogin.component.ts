import { Component, OnInit } from '@angular/core';
import { diPublic } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})
export class AppLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var userEmail: string;
    var googleUrl: any;
    var responseDate: any;
    var userpostDate ={
      'email': ''
    }
  }

}
