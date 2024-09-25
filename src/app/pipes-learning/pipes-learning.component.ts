import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-pipes-learning',
  templateUrl: './pipes-learning.component.html',
  styleUrl: './pipes-learning.component.css'
})
export class PipesLearningComponent {
  counter3=0;
  constructor(private counterService:CounterService,private datePipe:DatePipe){
    console.log("in pipes...");
    this.counter3=this.counterService.scount;
    console.log("counter3:",this.counter3);
    
  }
  increment(){
    this.counterService.incrementCounter();
    this.counter3=this.counterService.getCounter();
  }

}
