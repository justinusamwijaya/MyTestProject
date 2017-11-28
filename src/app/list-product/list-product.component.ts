import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/Http";

import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


  unitList : any[]
  
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {  
    this.db.list("data")
    .snapshotChanges()
    .subscribe(result=>{
      this.unitList = result.map(data=> {
    var obj ={
    key:data.key,
    value:data.payload.val(),

         }
  return obj;
       });
  console.log(this.unitList)
   })
  }

}
