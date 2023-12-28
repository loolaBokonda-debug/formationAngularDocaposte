import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.css']
})
export class ChatElementComponent implements OnInit {
  
  gender?: string
  contactName?: string

  constructor() { }

  ngOnInit(): void {
  }

}
