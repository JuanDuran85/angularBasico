import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _expreRegular : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public loginForm : FormGroup = this._fb.group({
    email: ['',[Validators.required, Validators.email, Validators.pattern(this._expreRegular)]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  })

  constructor(private _fb :  FormBuilder) { }

  ngOnInit(): void {
  }

  login() : void {
    console.log("login");
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
  }

}
