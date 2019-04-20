import { RefeicaoService } from './refeicao.service';
import { Tipo } from './../glicemia/models/glicemia-tipo.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlicemiaModel } from '../glicemia/models/glicemia.model';
import { RefeicaoModel } from './models/refeicao.model';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrls: ['./refeicao.component.css']
})
export class RefeicaoComponent implements OnInit {

  dataForm: FormGroup;
  tipoForm: FormGroup;
  nivelForm: FormGroup;

  glicemia: RefeicaoModel;
  constructor(private fb: FormBuilder, private service: RefeicaoService) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      Data: [new Date(), Validators.required],
      Hora: ['', Validators.required]
    });
    this.tipoForm = this.fb.group({
      Refeicao: ['', Validators.required]
    });
  }

  inserirRefeicao() {
    this.glicemia = this.dataForm.value;
    this.service.inserirRefeicao(this.glicemia);
  }
}


