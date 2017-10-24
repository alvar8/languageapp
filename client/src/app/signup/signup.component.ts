import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formInfo = {
    username:"",
    password:"",
    native:"",
  }
  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup(){
    const {username, password, native} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.signup(username, password, native)
      .map(user => console.log(user))
      .subscribe(r=>this.router.navigate(['/home']));
    } else{
      console.log("You must set a username and a password");
    }
  }
}
