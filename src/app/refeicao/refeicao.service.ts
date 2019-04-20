import { RefeicaoModel } from './models/refeicao.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {

  constructor(private http: HttpClient, private router: Router) { }

  inserirRefeicao(glicemia: RefeicaoModel) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    body.set('Data', '1/04/2019');
    body.set('Hora', glicemia.Hora);
    body.set('Tipo', glicemia.Data);
    body.set('Refeicao', String(glicemia.Refeicao));
    body.set('Email', localStorage.getItem('currentUser'));
    return this.http.post('http://localhost:59061/api/inserir_refeicao', body.toString(), {headers}).subscribe(res => {
    });
  }
}
