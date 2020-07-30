import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authService:AuthService;

  constructor( authServic: AuthService) {
    this.authService=authServic;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
