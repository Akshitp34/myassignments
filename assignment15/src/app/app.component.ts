import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
<html>
  <head>
  <title> M.I. </title>
  <style>
  h1,h2{
    text-align:center;
    color:blue;
  }
  </style>
  </head>
  <body>
  <h1>Marvellous Infosystems</h1>
  <h2>Educating For A Better Tomorrow</h2>
  </body>
  </html>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment15';
}
