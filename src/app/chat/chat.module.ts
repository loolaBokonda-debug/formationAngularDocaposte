import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent,
    MessageFormComponent,
    MessageComponent  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class ChatModule { }
