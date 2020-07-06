import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  loggedinUser: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loggedinUser = this.loginService.getLoggedInUsername();
  }

  logout() {
    this.loginService.resetUser();
    this.router.navigate(['login']);
  }

}
