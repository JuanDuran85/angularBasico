import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ejemplo1';
  eventoNuevo(evento : any){
    console.log("evento emitido de hijo a padre...");
    console.log(evento);
  }
}
