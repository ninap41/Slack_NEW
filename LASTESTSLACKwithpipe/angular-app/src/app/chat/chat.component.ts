import { Component, OnInit,OnDestroy} from '@angular/core'; // for socket io OnDestroy
import { DataService } from '../data.service';
import { User } from '../user';  
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

// import { Message } from '../message'


@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
userList=[];
  messages = [];

  searchStr: string = '';

  connection;
  // message = new Message();
  fullImagePath: String;

  constructor(
    private _dataService: DataService,
    private chatService:ChatService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.fullImagePath = '.../../assets/images/unnamed.png'


    this._dataService.retrieveUsers()
    .then(data => this.userList = data.userResults)
    console.log(this._dataService.retrieveUsers());  


    // this._dataService.retrieveUsers()
    // .then(data => this.userList = data.userResults)
    // console.log(this._dataService.retrieveUsers());  



  }

  ngOnInit() {


    let modal = document.getElementById('contactModal');
    modal.style.display = "none";
    var modalbackground = document.getElementById('modalHide');
    modalbackground.style.display = "none";
    
  }

  openModal(){
    let modal = document.getElementById('contactModal');
    modal.style.display = "block";
    var modalbackground = document.getElementById('modalHide');
    modalbackground.style.display = "block";

  }
  closeModal() {
    let modal = document.getElementById('contactModal');
    modal.style.display = "none";
    var modalbackground = document.getElementById('modalHide');
    modalbackground.style.display = "none";
  }


  

}
