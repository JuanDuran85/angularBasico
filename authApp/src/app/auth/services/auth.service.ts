import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, UserData } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public baseUrl : string = environment.baseUrl;
  private _user! : UserData;

  get user ()  {
    return { ...this._user};
  }

  constructor(private _http : HttpClient) { }

  registerUser(name: string, password: string, email: string){
    const url = `${this.baseUrl}/auth/new`;
    const body : object = {
      name,
      email,
      password
    };

    return this._http.post<AuthResponse>(url,body).pipe(
      tap(resp => {
        if (resp.ok) {
          localStorage.setItem('token',resp.token!);
        }
      }),
      map(resp =>resp.ok),
      catchError(error => of(error.error))
    );
  }

  loginUser(email: string, password: string) {
    const url : string = `${this.baseUrl}/auth`;
    const body  : object = {
      email,
      password
    }
    return this._http.post<AuthResponse>(url, body).pipe(
      tap(({ok, token}) => {
        if (ok) {
          localStorage.setItem('token',token!);
        }
      }),
      map(resp => resp.ok),
      catchError((error) => of(error.error))
    );
  }

  validToken() : Observable<boolean> {
    const url : string = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this._http.get<AuthResponse>(url, {headers}).pipe(
      map(resp => {
        localStorage.setItem('token',resp.token!);
        this._user = {
          name: resp.name!,
          uid: resp.uid!,
          email: resp.email!
        }
        return resp.ok
      }),
      catchError(() => of(false))
    );
  }

  logOutUser(){
    localStorage.removeItem('token');
  }
}