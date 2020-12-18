import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthGuard } from '../guard/auth.guard';
import { Router } from  "@angular/router";
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public test=0;

  constructor(
    public authguard: AuthGuard,
    public router: Router,
    public authService: AuthService
  ) {
     if(localStorage.getItem('userid')==null){
      this.router.navigate(['login']);
    }
  }
  ngOnInit(): void {
    this.authService.timerOut = setTimeout(()=>{
      if(confirm('Do you want to stay Logged in?')){
        location.reload();
      } else {
        setTimeout(()=>{
          this.authService.SignOut();
          this.router.navigate(['']);
        }, 50000);
      }
    }, 100000)
   }
   monthSet="";

  setJanuary(){
    this.monthSet = "jan";
  }
  setFebruary(){
    this.monthSet = "feb";
  }
  setMarch(){
    this.monthSet = "mar";
  }
  setApril(){
    this.monthSet = "apr";
  }
  setMay(){
    this.monthSet = "may";
  }
  setJune(){
    this.monthSet = "jun";
  }
  setJuly(){
    this.monthSet = "jul";
  }
  setAugust(){
    this.monthSet = "aug";
  }
  setSeptember(){
    this.monthSet = "sep";
  }
  setOctober(){
    this.monthSet = "oct";
  }
  setNovember(){
    this.monthSet = "nov";
  }
  setDecember(){
    this.monthSet = "dec";
  }
}
