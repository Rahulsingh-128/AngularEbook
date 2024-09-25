import { CookieService } from "ngx-cookie-service";
import { UseraccountService } from "../customservices/useraccount.service";
import { inject } from "@angular/core";

export function authGuard():boolean{
//   const account = inject(UseraccountService);
    const cookie=inject(CookieService)
    const username=cookie.get('user');
    if(username!='') 
        return true;
    else{
        window.alert("Please login first....")
        return false;
    }
}