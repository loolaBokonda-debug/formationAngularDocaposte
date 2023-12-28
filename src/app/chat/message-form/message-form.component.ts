import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  message?: string

  @Output() sendEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.sendEvent.emit(this.message)
  }

}
