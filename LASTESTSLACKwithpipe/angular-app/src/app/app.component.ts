import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
// import { ModuleService } from './module.service';
import { ChatService } from './chat.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
//MODEL IMPORTS
// import { Message } from './message'; 
import {ModalModule} from "ng2-modal";

import { User } from './user'; 



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Slackman';
valid = false;
loggedList=[];
logAttempts = 0;


// newMessage = new Message;
fullImagePath;
fullImagePath2;
today = new Date();

userList=[]
channelList=[]
// userList=[]
count;
count2;
 

  constructor(
    private _chatService: ChatService,
    private _dataService: DataService,
    private _router: Router )
  {
    this.fullImagePath = '../../assets/images/unnamed.png'
    this.fullImagePath2= '../../assets/images/unnamed2.png'

    this._dataService.retrieveUsers()
    .then(data => this.userList = data.userResults)
    console.log(this._dataService.retrieveUsers());  




    
 }

 ngOnInit()
 {
  this.loggedList = this._dataService.retrieveLogged() //if retrieving works

  
}


openModal2(){
  this.count2 += 1
  let modal = document.getElementById('contactModal2');
  if(this.count2 == 1){
  modal.style.display = "block";
  }
  else {
    this.count2 = 0;
    this.closeModal()
  }

}
closeModal() {
  let modal = document.getElementById('contactModal2');
  modal.style.display = "none";
}

LogoutData(num : number){
  this._dataService.LogOut(num);
  this._router.navigateByUrl("")
  this.valid = false;

}



}
