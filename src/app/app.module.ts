import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/Http";

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { WelcomingPageComponent } from './welcoming-page/welcoming-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { TesterComponent } from './tester/tester.component';
import { DalamSiteComponent } from './dalam-site/dalam-site.component';

import{AngularFireDatabaseModule}from"angularfire2/database";
import{AngularFireAuthModule}from"angularfire2/auth";

import {AngularFireModule} from "angularfire2";
import { UploadImageComponent } from './upload-image/upload-image.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const config = {
  apiKey: "AIzaSyB0bsBPV5CkzrM05--DQqaSbbrYhGEC2zs",
  authDomain: "mytestproject-e8d1b.firebaseapp.com",
  databaseURL: "https://mytestproject-e8d1b.firebaseio.com",
  projectId: "mytestproject-e8d1b",
  storageBucket: "mytestproject-e8d1b.appspot.com",
  messagingSenderId: "164352257123"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormLoginComponent,
    WelcomingPageComponent,
    AddProductComponent,
    ListProductComponent,
    TesterComponent,
    UploadImageComponent,
    DetailProductComponent,
    DalamSiteComponent,

  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:"",component:HomepageComponent},
      {path:"form",component:FormLoginComponent},
      {path:"page-front",component:WelcomingPageComponent},
      {path:"add-product",component:AddProductComponent},
      {path:"list-product",component:ListProductComponent},
      {path:"detail/:id",component:DetailProductComponent},
    ]),
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
