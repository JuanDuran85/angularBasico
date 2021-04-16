import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.validateAuth()
        .pipe(
          tap(resp => {
            if (!resp) {
              this.router.navigate(['./auth/login']);
            }
          })
        );

/*       if (this.authService.auth.id) {
        return true
      }
      return false; */
  }

  constructor(private authService : AuthService, private router : Router){}

  canLoad( route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.authService.validateAuth() // resulve un boolean o observable
    .pipe(
      tap(resp => {
        if (!resp) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
/*     if (this.authService.auth.id || localStorage.getItem('id')) {
      return true
    }
    return false; */
  }
}