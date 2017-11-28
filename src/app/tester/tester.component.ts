import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  constructor() { }

  ngOnInit() {$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  }

}
