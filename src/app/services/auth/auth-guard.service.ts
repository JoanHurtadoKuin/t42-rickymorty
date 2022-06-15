import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){
    const username = window.sessionStorage.getItem("auth-username");
    const role = window.sessionStorage.getItem("auth-role");

    if(!username){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
