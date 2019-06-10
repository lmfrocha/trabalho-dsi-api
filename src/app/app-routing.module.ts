import { PacienteVinculadoComponent } from './paciente-vinculado/paciente-vinculado.component';
import { VincularComponent } from './vincular/vincular.component';
import { ExportarRefeicaoComponent } from './exportar-refeicao/exportar-refeicao.component';
import { RefeicaoComponent } from './refeicao/refeicao.component';
import { ExportartabelaComponent } from './exportartabela/exportartabela.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { GlicemiaComponent } from './glicemia/glicemia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'glicemia', component: GlicemiaComponent },
  { path: 'home', component: ContentComponent },
  { path: '', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'exportartabela', component: ExportartabelaComponent},
  { path: 'refeicao', component: RefeicaoComponent},
  { path: 'exportarrefeico', component: ExportarRefeicaoComponent},
  { path: 'vincular', component: VincularComponent},
  { path: 'glicemiaPaciente', component: PacienteVinculadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
