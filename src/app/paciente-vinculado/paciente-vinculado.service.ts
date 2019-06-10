import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlicemiaModel } from '../glicemia/models/glicemia.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteVinculadoService {
  pacienteChanged = new Subject<any>();
  public listaGlicChanged = new Subject<GlicemiaModel[]>();


  constructor(private http: HttpClient, private router: Router) { }

  listarPaciente() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const uri = 'http://localhost:59061/api/lista_pacientes_vinculados?email=' + localStorage.getItem('currentUser');
    return this.http.get(uri, {headers}).subscribe(res => {
      console.log(res);
      this.pacienteChanged.next(res);
    });
}
  buscarPaciente(id) {
    console.log(this.listaGlicChanged, 'teste');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const uri = 'http://localhost:59061/api/exibe_glicemia_paciente?id=' + id;
    this.http.get<GlicemiaModel[]>(uri, { headers }).subscribe(res => {
      this.listaGlicChanged.next(res);
    });
  }
}
