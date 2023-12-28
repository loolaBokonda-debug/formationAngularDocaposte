import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ChatListComponent } from './chat-list/chat-list/chat-list.component';
import { ChatComponent } from './chat/chat/chat.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'chat-list',component:ChatListComponent},
  {path:'chat',component:ChatComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
