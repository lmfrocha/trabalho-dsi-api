import { ExportarRefeicaoService } from './exportar-refeicao.service';
import { GlicemiaModel } from './../glicemia/models/glicemia.model';
import { Component, OnInit } from '@angular/core';
import { Refeicao } from '../glicemia/models/refeicao.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-exportar-refeicao',
  templateUrl: './exportar-refeicao.component.html',
  styleUrls: ['./exportar-refeicao.component.css']
})
export class ExportarRefeicaoComponent implements OnInit {

  constructor(public service: ExportarRefeicaoService) { }
  displayedColumns: string[] = ['Id', 'Data', 'Hora', 'Refeicao'];
  dataSource: Refeicao[];
  ngOnInit() {
    console.log(this.service.listaGlicChanged, 'ff');
    this.service.listaGlicChanged.subscribe(resposta => {
      this.dataSource = resposta;
      console.log(this.dataSource);
    });
    this.service.ListarRefeicao();
  }

  buscar() {
  }

  exportAsXLSX() {
    this.service.exportAsExcelFile(this.dataSource, 'Tabela_Glicemia');
 }
}
