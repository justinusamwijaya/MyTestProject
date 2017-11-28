import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase/app";
import {AngularFireAuth} from "angularfire2/auth"
import "firebase/storage"

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(private db:AngularFireDatabase, private auth:AngularFireAuth) { }

  gambar:File

  fileChange($event){

   this.gambar=$event.target.files[0];
    console.log(this.gambar);

  }

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
        console.log(UploadIn.snapshot.downloadURL);
      // insert data to firebase
      }


    
    )
  }
  ngOnInit() {
  }

}
