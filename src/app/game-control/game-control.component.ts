import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    @Output() counterEmiterEven = new EventEmitter();
    @Output() counterEmiterOdd = new EventEmitter();
    counter:number=0;

    counterArrayEven =[];
    counterArrayOdd =[];
    interval;   
    constructor() {
       
     }

    ngOnInit() {
        // this.counterEmiter.emit(this.counter++)  
    }
    
    onStart(){   
        this.interval = setInterval(() => { 
            this.makeCount()
        }, 1000);
    }  
    onStop(){   
        clearInterval(this.interval)
    }  

    makeCount(){ 
        this.counter++;
        if(this.counter% 2){ 
            this.counterArrayOdd.push(this.counter);
            this.counterEmiterOdd.emit(this.counterArrayOdd);
        }else{ 
            this.counterArrayEven.push(this.counter);
            this.counterEmiterEven.emit(this.counterArrayEven);
        } 
    }

}
