import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUser ,resetUser} from '../ngrx/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:Observable<string>;
  constructor(public account:UseraccountService,private cookie:CookieService,private store:Store<{user:string}>, private router:Router){
   
    store.dispatch(setUser(cookie.get('user')));
    this.username=store.select("user");
  }

    logout(){
      this.cookie.delete('user');
      this.store.dispatch(resetUser());
      this.account.loginFlag=false;
      window.alert("Successfully logged Out....")
      this.router.navigate(['/login']);
    }
    

  

}
