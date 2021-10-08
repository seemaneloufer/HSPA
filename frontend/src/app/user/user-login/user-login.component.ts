import { Router, RouterModule } from '@angular/router';
import { AlertifyService } from './../../services/alertify.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService
    ,private alertify:AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token =this.authService.authUser(loginForm.value);
    if(token){

      localStorage.setItem('token',token.userName)
      this.alertify.success('SUCCES');
      this.router.navigate(['/']);
    }else{
      this.alertify.success('not success');
      this.router.navigate(['/']);
    }

  }

}
