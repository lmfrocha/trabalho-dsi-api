import { CadastroModel } from './cadastro-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  cadastro: CadastroModel;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      Nome: ['', Validators.compose([Validators.required])],
      SobreNome: ['', Validators.required],
      Email: ['', Validators.required],
      Senha: ['', Validators.required],
      ConfirmarSenha: ['', Validators.required]
    });
  }

  registrar() {
    if (this.form.valid) {
      this.cadastro = this.form.value;
      // chamar requisição no service
    }
  }

}
