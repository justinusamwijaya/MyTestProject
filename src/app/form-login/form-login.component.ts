import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {


  constructor(private router:Router) { }
  onSubmit(i:NgForm){
    console.log(i.value)
    this.router.navigate(["/page-front"])
  }
  ngOnInit() {
  }

}
