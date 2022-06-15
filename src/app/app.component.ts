import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './services/auth/login.service';
import { UserService } from './services/auth/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router:Router,private loginService: LoginService, private userService: UserService ){ }


  user:any;
  role:any;
  log: any;

  ngOnInit(): void{
    this.loginService.getUser$().subscribe(user => {
      this.user = user;
    });

    this.userService.getUser$().subscribe(data => {
      this.role = data.role;
      this.log = 'Logout';
    });

  }

  logout(): void{
   window.sessionStorage.clear();
   this.user.username = '';
   this.role = '';
   this.log = 'Login';
   this.router.navigate(['/login']);
  }
}
