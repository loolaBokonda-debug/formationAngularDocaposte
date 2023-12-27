import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login? : string = "v1"
  password? : string = "jdjdjd"

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.login ="value 2"
      this.login = "new password"
    }, 3000
    )
  }

}
