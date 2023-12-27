import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RouterModule } from '@angular/router';
import { ChatElementComponent } from './chat-element/chat-element.component';



@NgModule({
  declarations: [
    ChatListComponent,
    ChatElementComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ChatListModule { }
