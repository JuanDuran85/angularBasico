import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ValidTokenGuard implements CanActivate, CanLoad {

  constructor(private _authService : AuthService, private _router : Router){}

  canActivate(): Observable<boolean> | boolean {
    return this._authService.validToken().pipe(
      tap(result => {
        if (!result){
          this._router.navigateByUrl('/auth');  
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean  {
    return this._authService.validToken().pipe(
      tap(result => {
        if (!result) {
          this._router.navigateByUrl('/auth');
        }
      })
    );
  }
}