import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'flight_info_app';
  isSignedIn = false;
  errorMessage = "";
  email = ""
  password = ""

  constructor(public firebaseService : FirebaseService) {}

  ngOnInit(){
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignup(){
    const res = await this.firebaseService.signup(this.email, this.password);
    console.log(res, "========" ); // Log the response
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    
  }

  async onSignin(){
    await this.firebaseService.signin(this.email, this.password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    
  }

}