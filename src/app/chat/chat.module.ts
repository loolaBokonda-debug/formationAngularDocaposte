import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    ChatComponent,
    MessageFormComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
