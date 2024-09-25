import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';

@Component({
  selector: 'app-directives-learning',
  templateUrl: './directives-learning.component.html',
  styleUrl: './directives-learning.component.css',
  providers:[CounterService]
})
export class DirectivesLearningComponent {
  counter1=0;
  constructor(private counterService:CounterService){
    console.log("in directives...");
    this.counter1=this.counterService.scount;
    console.log("counter1:",this.counter1);
    

  }
  increment(){
    this.counterService.incrementCounter();
    this.counter1=this.counterService.getCounter();
  }

}
