import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  getErrorMessage(controlName) {
    if (this.loginForm.controls[controlName].hasError('required')) {
      return `${controlName} is required`;
    } else if (this.loginForm.controls[controlName].hasError('minlength')) {
      return `${controlName} must have minimum 6 caracters`;
    }
  }

  loginUser() {
    this.loginService.loginUser(this.loginForm.controls.username.value);
  }

}
