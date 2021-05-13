import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  private _expreRegular : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public formRegister : FormGroup = this._fb.group({
    name: ['test2',[Validators.required, Validators.minLength(2)]],
    email: ['test2@test.com',[Validators.required, Validators.email, Validators.pattern(this._expreRegular)]],
    password: ['1234567',[Validators.required, Validators.minLength(6)]],
  })

  constructor(private _fb : FormBuilder, private _router : Router) { }

  ngOnInit(): void {}

  registerUser():void{
    console.log(this.formRegister.value);
    this._router.navigateByUrl('/dashboard');
  }
}
