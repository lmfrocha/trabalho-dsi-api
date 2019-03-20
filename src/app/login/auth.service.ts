import { User } from './user-model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mostrarMenu = new EventEmitter<boolean>();
  constructor(private http: HttpClient, private router: Router) { }

  realizarLogin(user: User) {
    this.router.navigate(['glicemia']);
    this.mostrarMenu.emit(true);
    console.log('akldjflçadjfajsfjasdçklj');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    console.log(user);
    body.set('username', user.Email);
    body.set('password', user.Senha);
    body.set('grant_type', 'password');
    return this.http.post('http://localhost:59061/api/token', body.toString(), { headers }).subscribe(res => {
      console.log(res);
      localStorage.setItem('currentUser', user.Email);
    });
  }
}
