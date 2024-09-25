import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterService } from '../customservices/counter.service';
import { decrement, increment, incrementByAmount } from '../ngrx/counter.actions';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
show=false;
counter3:number;
counter3$:Observable<number>;
companyName="Neosoft";
baseLocation="parel";
checkStatus=false;
inputType="checkbox";
companyOffices=['dadar','parel','hyderabad','rabale'];
offices=[
  {
    location:'Rabale,Mumbai',
    address:'Sigma it park'
  },
  {
    location:'Parel,Mumbai',
    address:'Business park'
  }
]

styleObject:any={
  color:"red",
  backgroundColor:"green",
  textDecoration:"underline"
}
salaries=[123344,23121,21313,132213];
styleClasses=["bg-warning","border","border-3","text-success","border-dark"]
changeStyle1(){
  this.styleObject.backgroundColor="pink"
  this.styleObject.transform='scale(1,1)'
}
changeStyle2(){
  this.styleObject.backgroundColor="lightblue"
}
static companyDirector="Mr John";
  className=LearningComponent;

constructor(private counterService : CounterService,private store:Store<{counter:number}>){
  this.counter3=counterService.scount; // normal service
    this.counter3$=this.store.select("counter"); // store service
  console.log("in learning constructor");
  setInterval(()=>{
    this.companyName="webworks"
  },5000);
  setTimeout(()=>{
    LearningComponent.companyDirector = "dr Rahul"
  },2000);
}
increment(){
  this.counterService.incrementCounter();
  // no auto change detection, we have to refetch updates
  this.counter3=this.counterService.getCounter();
  this.store.dispatch(increment());
}
decrement(){
  this.counterService.decrementCounter();
  // no auto change detection, we have to refetch updates
  this.counter3=this.counterService.getCounter();
  this.store.dispatch(decrement());

}
bindingImage={
  url:"https://www.tutorialsstar.com/wp-content/uploads/2021/05/1-Copy-768x406.png",
  height:300,
  width:700,
  name:"Data binding"
}
today=new Date();
}
