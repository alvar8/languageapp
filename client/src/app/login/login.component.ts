import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

interface LoginForm{
  username:string;
  password:string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };
  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe(r=>this.router.navigate(['/home']));
    } else{
      console.log("You must set a username and a password");
    }
  }
}
