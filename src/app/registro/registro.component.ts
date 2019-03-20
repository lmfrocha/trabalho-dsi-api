import { CadastroModel } from './cadastro-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  cadastro: CadastroModel;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private registroService: RegistroService) { }

  ngOnInit() {
    this.form = this.fb.group({
      Nome: ['', Validators.compose([Validators.required])],
      SobreNome: ['', Validators.required],
      Email: ['', Validators.required],
      Senha: ['', Validators.required],
      ConfirmarSenha: ['', Validators.required],
      TipoUsuario: ['paciente', Validators.required]
    });
  }

  registro() {
    console.log(this.form.get('TipoUsuario').value);
    if (this.form.valid) {
      this.cadastro = this.form.value;
      this.registroService.registrarUsuario(this.cadastro);
      // chamar requisição no service
    } else {
      this.snackBar.open('Preencha todos os campos corretamente', '', {
        duration: 1500,
      });
    }
  }

}
