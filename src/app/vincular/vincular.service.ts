import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VincularService {

  pacienteChanged = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) { }

  listarPaciente() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('http://localhost:59061/api/listar_pacientes', {headers}).subscribe(res => {
      console.log(res);
      this.pacienteChanged.next(res);
    });
  }

  vincularPaciente(IdPaciente) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const url = 'http://localhost:59061/api/vicular_paciente?IdPaciente=' + IdPaciente + '&email=' + localStorage.getItem('currentUser');
    return this.http.get(url, {headers}).subscribe(res => {
      alert('Paciente Vinculado com Sucesso');
    });
  }
}
