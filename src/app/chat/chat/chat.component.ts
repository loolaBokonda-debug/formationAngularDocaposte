import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {



  msgs = [{message:"message1",createdAt:new Date("2023/12/26")},
  {message:"message2",createdAt:new Date("2023/12/27")}]

  constructor() { }

  ngOnInit(): void {
  }

  send(message: string){
    this.msgs.push({message,createdAt:new Date})
  }

}
