import { Component, OnInit } from '@angular/core';
import {NgForm}from "@angular/forms";
import {Http, Headers, RequestOptions} from "@angular/Http";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import "firebase/storage";

import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private db:AngularFireDatabase, private auth:AngularFireAuth, private router:Router ) { }

  unitList : Observable<any[]>

  ngOnInit() {
  this.db.list("data").valueChanges().subscribe(item=>console.log(item))
  }


  something(i:NgForm){
    this.db.list("data").push({
      NamaProduk: i.value.NamaProduk,
      Deskripsi:i.value.Deskripsi,
      Harga:i.value.Harga,
      Gambar:this.URLgambar,
    })
    this.router.navigate(["/page-front"])
    this.URLgambar=""
  }
  gambar:File
  
   fileChange($event){
  
     this.gambar=$event.target.files[0];
      console.log(this.gambar);
      
      this.upload();
  
    }
  
    URLgambar;

    upload(){
      let simpanan = firebase.storage().ref();
      let UploadIn = simpanan.child("images/"+this.gambar.name).put(this.gambar);
  
      UploadIn.on(
        
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          console.log("ERROR...BECANDA!")
        // upload in progress
        },
  
        (error) => {
          console.log("ERROR")
        // upload error        
        },
  
        () => {
          console.log("SUCCESS")
        // upload success
          this.URLgambar = UploadIn.snapshot.downloadURL
          console.log(UploadIn.snapshot.downloadURL);
        // insert data to firebase
        }
  
  
      
      )
    }
  
  // PENTING!!! PERTAMA HARUS GANTI DI CONSTRUCTOR DARI "private db:AngularFireDatabase" 
  // JADI "private http:Http"


  // something(i:NgForm){    
    
  //   var body = JSON.stringify({
  //   user3:{
      // NamaProduk: i.value.NamaProduk,
      // Deskripsi:i.value.Deskripsi,
      // Harga:i.value.Harga,
      // Gambar:i.value.Gambar,
  //   }
  // });
  // var header = new Headers({"Content-Type":"application/json"});
  // var options = new RequestOptions({headers:header});
  // this.http.post("https://mytestproject-e8d1b.firebaseio.com/data.json ",body,options).subscribe(

  // result =>{
  //   console.log(result.json());
  //   },
  // error =>{
  //   console.log(error);
  //   }
  // );

  // }
  
}
