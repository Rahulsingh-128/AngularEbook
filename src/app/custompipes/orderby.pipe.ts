import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], sortcase?: boolean): any[] {
     console.log("in transform....");
     console.log("arr",array);
    if(typeof array[0]=='string'){
      return this.stringSort(array,sortcase)
    }
    else if(typeof array[0]=='number'){
      return this.numberSort(array);
    }
    else if( array[0] instanceof Date){
      return this.dateSort(array)
    }
    else
       return array;
    }
  stringSort(array: any[], sortcase?: boolean){
    if(sortcase==true){
      return array.sort((s1,s2)=>s1.localeCompare(s2))
    }else
    return array.sort();
  }
  numberSort(array:any[]){
    return array.sort((n1,n2)=>n1-n2);
  }
  dateSort(array:Date[]){
    return array.sort((d1,d2)=>d1.getTime()-d2.getTime());
  }

}
