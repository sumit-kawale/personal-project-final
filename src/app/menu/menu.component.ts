import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public show: boolean;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('userid')==null) this.show=false;
    else this.show=true;
  }

}
