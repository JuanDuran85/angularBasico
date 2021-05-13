import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
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
    email: ['test1@test.com',[Validators.required, Validators.email, Validators.pattern(this._expreRegular)]],
    password: ['1234567',[Validators.required, Validators.minLength(6)]]
  })

  constructor(private _fb :  FormBuilder, private _router: Router, private _authService :  AuthService) { }

  ngOnInit(): void {}

  login() : void {
    const { email, password } = this.loginForm.value;
    this._authService.loginUser(email,password).subscribe(resp => {
      if (resp) {
        this._router.navigateByUrl('/dashboard');
      } else {
        console.log("error");
      }
    });
  }
}