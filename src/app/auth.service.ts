import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

interface AuthResponse{
  idToken	:string;
email	:string;
refreshToken	:string;	
expiresIn	:string;	
localId	:string;
registered?:boolean;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {
  auth:boolean=false;

  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.auth=false;

  }
  signup(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXbkyfDSalTKZbFWHFDWxK8p8q2u2YZRM',{
        email:email,
        password:password,
        returnSecureToken:true
    })
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXbkyfDSalTKZbFWHFDWxK8p8q2u2YZRM',{
        email:email,
        password:password,
        returnSecureToken:true
    })
  }
  logout(){
    this.auth=false;
  }
}
