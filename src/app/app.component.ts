import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    passedCounterEven;
    passedCounterOdd;
    passEmiterEven(event){
        this.passedCounterEven=event
    }
    passEmiterOdd(event){
        this.passedCounterOdd=event
    }
}
