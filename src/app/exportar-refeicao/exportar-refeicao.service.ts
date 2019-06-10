import { GlicemiaModel } from './../glicemia/models/glicemia.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Refeicao } from '../glicemia/models/refeicao.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportarRefeicaoService {

  public listaGlicChanged = new Subject<Refeicao[]>();
  listaGlic: Refeicao[];
  constructor(private http: HttpClient, private router: Router) { }

  ListarRefeicao() {
    console.log(this.listaGlicChanged, 'teste');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    body.set('Email', localStorage.getItem('currentUser'));
    this.http.post<Refeicao[]>('http://localhost:59061/api/listar_refeicao', body.toString(), { headers }).subscribe(res => {
      this.listaGlicChanged.next(res);
    });
  }

  public exportAsExcelFile(json: Refeicao[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}

