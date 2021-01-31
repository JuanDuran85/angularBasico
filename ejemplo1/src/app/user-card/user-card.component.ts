import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})

export class UserCardComponent implements OnInit {
  public name : string;
  public userName : string;
  public avatar : string;

  constructor() { 
    this.name = "";
    this.userName = "";
    this.avatar = "";
  }

  ngOnInit(): void {
    this.name = "Juan";
    this.userName = "JuanDuran85";
    this.avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png";
  }

  changingUser(event : any){
    console.log(event);
    this.userName = event.target.value;
  }
  changingName(event : any){
    this.name = event.target.value;
  }
}
