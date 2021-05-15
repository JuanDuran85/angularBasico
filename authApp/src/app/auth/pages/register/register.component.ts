import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

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

  constructor(private _fb : FormBuilder, private _router : Router, private _authService : AuthService) { }

  ngOnInit(): void {}

  registerUser():void{
    const {email, name, password } = this.formRegister.value;
    this._authService.registerUser(name , password, email).subscribe(resp => {
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
          title: 'Registro éxitoso'
        }).then(()=>{
          this._router.navigateByUrl('/dashboard');
        });

      } else {
        if (resp.errors === undefined) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${resp.msg}`,
            footer: 'Intenta nuevamente...'
          })
        } else {
          const errorMsg : string[] = [];
          resp.errors.errors.forEach((element: any) => {
            errorMsg.push(element.msg);
          });
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${errorMsg.toString()}`,
            footer: 'Intenta nuevamente...'
          })
        }
      }
    });
    //this._router.navigateByUrl('/dashboard');
  }
}