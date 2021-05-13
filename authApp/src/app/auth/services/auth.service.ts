import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, UserData } from '../interfaces/auth.interface';
import { of } from 'rxjs';
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

  loginUser(email: string, password: string) {
    const url : string = `${this.baseUrl}/auth`;
    const body  : object = {
      email,
      password
    }
    return this._http.post<AuthResponse>(url, body).pipe(
      tap(resp => {
        if (resp.ok) {
          this._user = {
            name: resp.name!,
            uid: resp.uid!
          }
        }
      }),
      map(resp => resp.ok),
      catchError(() => of(false))
    );
  }
}
