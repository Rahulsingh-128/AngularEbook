import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
companyName="Neosoft";
baseLocation="Rabale";
checkStatus=false;
inputType="checkbox";
constructor(){
  setInterval(()=>{
    this.companyName="webworks"
  },5000);
}
bindingImage={
  url:"https://www.tutorialsstar.com/wp-content/uploads/2021/05/1-Copy-768x406.png",
  height:300,
  width:700,
  name:"Data binding"
}



display(){

}
}
