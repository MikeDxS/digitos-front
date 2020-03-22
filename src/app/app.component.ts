import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digitos-front';
  data : string;
  informacion : JSON;
  constructor(){
  }
  enviar(url : string): void {
    console.log('URL:',url);
    fetch('http://localhost:5000/prediccion',{
      method: 'POST',
      body: JSON.stringify({
        url: url
      }),
      headers: {'Content-Type': 'application/json'},
    })
    .then(function(response: Response) {
      return response.json()
    })
    .then((datos)=>{
      this.informacion = datos;
    })
  }
}
