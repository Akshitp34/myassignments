import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <head>
  <title>Marvellous Infosystems</title>
  </head>
  <body>
  <h1 align = "center">Marvellous Infosystems</h1>
  <br>
  <hr>
  <br>

  <input type = "text">
  
  </body>
  `,
  styles: [`
  input{
    
background-color:powderblue;

  }`]
  
})
export class AppComponent {
  title = 'assignment23';
}
