import { Component, OnInit } from '@angular/core';
//DATA && SERVICES
import { ChatService } from '../chat.service';

import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//MODEL IMPORTS
import { User } from '../user';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
loggedList= []
  constructor(
    private _chatService: ChatService,
    private _dataService: DataService,
    private _router: Router 
  ) { 
    
  }

  ngOnInit() {
    this.loggedList = this._dataService.retrieveLogged() //if retrieving works

  }


}
