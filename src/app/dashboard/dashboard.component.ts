import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // public monthSet
  public test=0;

  constructor(
    public authguard: AuthGuard
  ) { }

  ngOnInit(): void {
  }
   monthSet="Jan";

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
