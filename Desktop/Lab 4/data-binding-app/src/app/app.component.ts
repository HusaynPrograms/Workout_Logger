import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Import components
import { ListComponent  } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  title = 'data-binding-app';
  show:boolean = true;


  onButtonClick(){
    this.count++
  }

  onStarDoubleClicked(){
    if (this.show)
 {
  this.show = false;
 }   else {
  this.show = true;
 }
  }
}


