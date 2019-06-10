import { VincularService } from './vincular.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vincular',
  templateUrl: './vincular.component.html',
  styleUrls: ['./vincular.component.css']
})
export class VincularComponent implements OnInit {
  listaPacientes = [];
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, public service: VincularService) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      Vincular: ['1'],
    });

    this.service.pacienteChanged.subscribe(resposta => {
      this.listaPacientes = JSON.parse(resposta);
    });

    this.service.listarPaciente();
  }

  teste() {
    this.service.vincularPaciente(this.dataForm.get('Vincular').value);
  }

}
