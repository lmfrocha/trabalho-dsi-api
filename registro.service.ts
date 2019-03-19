import { Injectable } from '@angular/core';
import { CadastroModel } from './cadastro-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient, private router: Router) { }

  registrarUsuario(usuario: CadastroModel) {
    return this.http.post('http://localhost:59061/api/token', usuario, {}).subscribe(res => {
      console.log(res);
      this.router.navigate(['']);
    });
  }
}
