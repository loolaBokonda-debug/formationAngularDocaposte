import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
 
 
  constructor() { }
 
  login : string =""
  password : string =""
  email : string =""
  gender : string =""
  age : number =0
 
  validateLogin() {
    return /^[a-zA-Z]+$/.test(this.login)
  }
  validatePassword() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/.test(this.password)
  }
  validateEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
  }
  validateGender() {
    return ['m', 'f '].includes(this.gender)
  }
  validateAge() {
    return this.age > 10 && this.age < 120
  }
 
  valider(){
    if (this.validateLogin() && this.validatePassword() && this.validateEmail() && this.validateGender() && this.validateAge()){
       console.log("success")
    }
  }
 
  ngOnInit(): void {
  }
 
}