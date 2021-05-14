import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
      if (resp === true) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Ingreso éxitoso'
        }).then(()=>{
          this._router.navigateByUrl('/dashboard');
        });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${resp.msg}`,
          footer: 'Intenta nuevamente...'
        })
      }
    });
  }
}