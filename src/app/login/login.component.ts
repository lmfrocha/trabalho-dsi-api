import { User } from './user-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User;
  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      Email: ['', Validators.compose([Validators.required])],
      Senha: ['', Validators.compose([Validators.required])],
    });
  }

  logar() {
    if (this.form.valid) {
      this.user = this.form.value;
      this.authService.realizarLogin(this.user);
    } else {
      this.snackBar.open('E-mail ou Senha Incorretos!', '', {
        duration: 1500,
      });
    }
  }
}
