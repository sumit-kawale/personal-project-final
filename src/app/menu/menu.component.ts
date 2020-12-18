import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public show: boolean;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('userid')==null) this.show=false;
    else this.show=true;
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
