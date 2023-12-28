import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatElementComponent } from './chat-element/chat-element.component';



@NgModule({
  declarations: [ChatListComponent,ChatElementComponent],
  imports: [
    CommonModule  ]
})
export class ChatListModule { }
