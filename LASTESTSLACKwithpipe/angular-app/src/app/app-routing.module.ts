import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatechannelComponent } from './createchannel/createchannel.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: ChatComponent, pathMatch: 'full' },

  {path: 'chat', component: ChatComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'createChannel', component: CreatechannelComponent  },


  


  //NEW STUFF
  { path: 'login', component: HomepageComponent},
  { path: 'register', component: HomepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

