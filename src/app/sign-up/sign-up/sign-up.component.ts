import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AppServiceService } from 'src/app/app-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  formUser : FormGroup
  constructor(private fb: FormBuilder, private appService: AppServiceService) {
     this.formUser =  this.fb.group({
      login:[ 'abdo', {validators: [Validators.required, Validators.pattern('[a-zA-Z]+')]}],
      password:[ 'Abdo', {validators:  [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}')]}],
      email:[ 'test@test.com', {validators: [Validators.required, Validators.email]}],
      gender:[ 'm', {validators: [Validators.required, this.genderValidator()]}],
      age:[ '20', {validators: [Validators.required, Validators.max(120),Validators.min(10)]}],
     })    
  }

  ngOnInit(): void {
  }

  genderValidator(): ValidatorFn {
     return (control: AbstractControl): { [key: string]: boolean } | null => {
      return ['m','f'].includes(control.value)? null: {genderInValid: true};
    };
  }

  submit(){
    this.appService.signUp(this.formUser.value).subscribe(res=>{
      console.log(res);
      
    })
  }
}
