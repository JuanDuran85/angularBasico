import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<ConfirmarComponent>) { }

  ngOnInit(): void {
  }

  deleteHero(){
    this.dialogRef.close(true);
  }

  closeWindow(){
    this.dialogRef.close();
  }

}
