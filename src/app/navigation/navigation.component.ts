import { Component, OnChanges, OnInit, SimpleChanges,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,DoCheck {
  auth: boolean = false;
  constructor(private service:AuthService,private route:Router){
    this.auth=this.service.auth;

  }
  ngDoCheck(){
    this.auth=this.service.auth;
    console.log(this.auth)

  }
  ngOnInit(): void {
    this.auth=this.service.auth;
    console.log(this.auth)
  }
  onLogOut(){
    this.service.logout()
    this.route.navigateByUrl('/login');
  }
}
