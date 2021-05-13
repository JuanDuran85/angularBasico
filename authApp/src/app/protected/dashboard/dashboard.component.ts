import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _router : Router, private _authservice : AuthService) { }

  get usuario(){
    return this._authservice.user;
  };
  
  ngOnInit(): void {}

  logoutUser():void{
    console.log("salio...");
    this._router.navigateByUrl('/auth');
  }
}
