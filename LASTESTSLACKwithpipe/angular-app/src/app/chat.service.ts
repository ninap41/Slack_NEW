import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import { Message } from './message'; 
import { User } from './user';  
//observable
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import * as io from 'socket.io-client'; 

@Injectable()
export class ChatService {
  // private url = 'http://localhost:8000';  
  // private socket;
  // newMessage = new Message;

  currentUser: User;

  constructor() { 


  }

    
  // sendMessage(message){
  //   this.socket.emit('add-message', message);    
  //   console.log("made it to the SENDMESSAGE SERVICE")

  // }

  // getMessages() {
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url);
  //     this.socket.on('message', (data) => {
  //       observer.next(data);    
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };  
  //   })     
  //   return observable;
  // }  
}