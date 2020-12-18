import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  DataService } from '../data.service';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public show: boolean;

constructor(
  private service: DataService,
  public router: Router
  ) {}

ngOnInit(): void {
  if(localStorage.getItem('userid')==null) this.show=true;
  else this.show=false;
}

onLogin(){
  if(localStorage.getItem('userid')==null){
    this.router.navigate(['login']);
  } else {
    this.router.navigate(['dashboard']);
  }
}
onSignup(){
  if(localStorage.getItem('userid')==null){
    this.router.navigate(['signup']);
  } else {
    this.router.navigate(['dashboard']);
  }
}

}
