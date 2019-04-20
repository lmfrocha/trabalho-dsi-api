import { ExportartabelaService } from './exportartabela.service';
import { GlicemiaModel } from './../glicemia/models/glicemia.model';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-exportartabela',
  templateUrl: './exportartabela.component.html',
  styleUrls: ['./exportartabela.component.css']
})
export class ExportartabelaComponent implements OnInit {

  constructor(public service: ExportartabelaService) { }
  displayedColumns: string[] = ['Id', 'Data', 'Hora', 'Tipo', 'Nivel'];
  dataSource: GlicemiaModel[];
  ngOnInit() {
    console.log(this.service.listaGlicChanged, 'ff');
    this.service.listaGlicChanged.subscribe(resposta => {
      this.dataSource = resposta;
      console.log(this.dataSource);
    });
    this.service.ListarGlicemia();
  }

  buscar(){
  }

  exportAsXLSX() {
    this.service.exportAsExcelFile(this.dataSource, 'Tabela_Glicemia');
 }
}
