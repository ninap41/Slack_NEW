import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 
//Services
 import { DataService } from './data.service';
 import { ChatService } from './chat.service';

//  import { ModuleService } from './module.service';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import 'hammerjs';
import {ModalModule} from "ng2-modal";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from './filter.pipe';
import { CreatechannelComponent } from './createchannel/createchannel.component';
// import { ExploreUsersComponent } from './explore-users/explore-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    ChatComponent,
    DashboardComponent,
    FilterPipe,
    CreatechannelComponent,
    // ExploreUsersComponent,

  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ModalModule,
    BrowserAnimationsModule

  ],
  providers: [ DataService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
