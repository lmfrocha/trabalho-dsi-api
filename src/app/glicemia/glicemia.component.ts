import { GlicemiaModel } from './models/glicemia.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tipo } from './models/glicemia-tipo.model';
import { GlicemiaService } from './glicemia.service';


@Component({
  selector: 'app-glicemia',
  templateUrl: './glicemia.component.html',
  styleUrls: ['./glicemia.component.css']
})

export class GlicemiaComponent implements OnInit {
  dataForm: FormGroup;
  tipoForm: FormGroup;
  nivelForm: FormGroup;

  glicemia: GlicemiaModel;

  foods: Tipo[] = [
    { value: 'extra', viewValue: 'Extra' },
    { value: 'antesCafe', viewValue: 'Antes do Café da Manhã' },
    { value: 'depoisCafe', viewValue: 'Depois do Café da Manhã' },
    { value: 'depoisAlmoco', viewValue: 'Antes do Almoço' },
    { value: 'depoisCafe', viewValue: 'Depois do Almoço' },
    { value: 'antesJantar', viewValue: 'Antes do Jantar' },
    { value: 'depoisJantar', viewValue: 'Depois do Jantar' },
    { value: 'aoDormirMadru', viewValue: 'Ao Dormir/Madrugada' },
  ];

  constructor(private fb: FormBuilder, private glicemiaService: GlicemiaService) { }
  ngOnInit() {
    this.dataForm = this.fb.group({
      Data: [new Date(), Validators.required],
      Hora: ['', Validators.required]
    });
    this.tipoForm = this.fb.group({
      Tipo: ['extra', Validators.required]
    });
    this.nivelForm = this.fb.group({
      Nivel: ['', Validators.required]
    });
  }

  inserirGlicemia() {
    this.glicemia = this.dataForm.value;
    this.glicemiaService.inserirGlicemia(this.glicemia);
  }
}
