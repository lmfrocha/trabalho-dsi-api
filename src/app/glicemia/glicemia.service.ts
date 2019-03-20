import { Injectable } from '@angular/core';
import { GlicemiaModel } from './models/glicemia.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlicemiaService {

  constructor(private http: HttpClient, private router: Router) { }

  inserirGlicemia(glicemia: GlicemiaModel) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    body.set('Data', '1/1/1998');
    body.set('Hora', glicemia.Hora);
    body.set('Tipo', glicemia.Tipo);
    body.set('Nivel', String(glicemia.Nivel));
    body.set('Email', localStorage.getItem('currentUser'));
    return this.http.post('http://localhost:59061/api/inserir_glicemia', body.toString(), {headers}).subscribe(res => {
    });
  }
}
