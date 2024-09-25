import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

  static compare(control:AbstractControl<any,any>):ValidationErrors{
    
    return{}
  }

  // static mailAccount(account:string) : ValidatorFn{
  //   return (control:AbstractControl)=>{
  //      // console.log("control:",control);
  //      const value=control.value;
  //       if(!value.substring(value.indexOf('@')).includes(account))
  //           return {mailaccount:true}
  //       else 
  //           return null
  //   }

// }
}
