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
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    body.set('Email', usuario.Email);
    body.set('Senha', usuario.Senha);
    body.set('Nome', usuario.Nome);
    body.set('SobreNome', usuario.SobreNome);
    body.set('TipoUsuario', usuario.TipoUsuario);

    return this.http.post('http://localhost:59061/api/realizar_cadastro', body.toString(), {headers}).subscribe(res => {
      console.log(res);
      this.router.navigate(['']);
    });
  }
}
