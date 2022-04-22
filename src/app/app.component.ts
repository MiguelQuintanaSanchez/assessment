import { Component } from '@angular/core';
import {RestService} from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assessment';

  constructor(private rest:RestService){
    this.rest.getData().subscribe(data=>{
      console.log(data);
    });
  }
}
