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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
