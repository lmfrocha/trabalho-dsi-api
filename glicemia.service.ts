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
    return this.http.post('http://localhost:59061/api/token', glicemia, {}).subscribe(res => {
      console.log(res);
    });
  }
}
