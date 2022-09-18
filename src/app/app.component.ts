import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-resume';
  name:string = 'Stas';
  age:number = 29;
  city:string ='Minsk';
  profession:string = 'engineer';
}
