import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter=0;

  constructor() {
    console.log("in Counter Service...");
   }

  incrementCounter(){
    this.counter++;
    console.log("incremented counter:",this.counter);
    
  }
  decrementCounter(){
    this.counter--;
    console.log("decremented counter:",this.counter);

  }
  getCounter(){
    return this.counter;
  }
  get scount(){
    return this.counter;
  }
}
