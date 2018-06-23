import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
  str = 'akshit';
  no1 = 22;
  no2 = 33;
  fun()
  {
this.title = "Button clicked";
  }

public  add() : number
   { 
return (this.no1 + this.no2);
  }
}
