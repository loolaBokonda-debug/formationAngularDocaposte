import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login? : string  = "value 1"

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.login = "value 2"
    }, 3000

    )
  }

  submit(){
    console.log('login', this.login);
    
  }

}
