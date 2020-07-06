import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedinUser: string;

  constructor(private router: Router) { }

  loginUser(username) {
    this.loggedinUser = username;
    this.router.navigate(['welcome']);
  }

  getLoggedInUsername() {
    return this.loggedinUser;
  }

  resetUser() {
    this.loggedinUser = '';
  }
}
