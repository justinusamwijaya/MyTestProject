import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase/app";


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  
  key:any;
  obj:{};

  constructor(private db: AngularFireDatabase, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      
      this.db.object("data/"+params["id"])
      .snapshotChanges()
      .subscribe(result=>{
        this.key= result.key;
        this.obj = result.payload.val()
        });
        console.log(this.key)
      });
  }

}
