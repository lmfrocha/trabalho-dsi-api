import { PacienteVinculadoService } from './paciente-vinculado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VincularService } from '../vincular/vincular.service';
import { GlicemiaModel } from '../glicemia/models/glicemia.model';

@Component({
  selector: 'app-paciente-vinculado',
  templateUrl: './paciente-vinculado.component.html',
  styleUrls: ['./paciente-vinculado.component.css']
})
export class PacienteVinculadoComponent implements OnInit {
  listaPacientes = [];
  dataForm: FormGroup;
  displayedColumns: string[] = ['Id', 'Data', 'Hora', 'Tipo', 'Nivel'];
  dataSource: GlicemiaModel[];
  constructor(private fb: FormBuilder, public service: PacienteVinculadoService) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      Vincular: ['1'],
    });

    this.service.pacienteChanged.subscribe(resposta => {
      this.listaPacientes = JSON.parse(resposta);
    });

    this.service.listaGlicChanged.subscribe(resposta => {
      this.dataSource = resposta;
      console.log(this.dataSource);
    });

    this.service.listarPaciente();
  }

  teste() {
    this.service.buscarPaciente(this.dataForm.get('Vincular').value);
  }

}
