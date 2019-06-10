import { PacienteVinculadoService } from './paciente-vinculado/paciente-vinculado.service';
import { VincularService } from './vincular/vincular.service';
import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { ContentComponent } from './content/content.component';
import { GlicemiaComponent } from './glicemia/glicemia.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import { RegistroService } from './registro/registro.service';
import { GlicemiaService } from './glicemia/glicemia.service';
import { ExportartabelaComponent } from './exportartabela/exportartabela.component';
import {MatTableModule} from '@angular/material/table';
import { ExportartabelaService } from './exportartabela/exportartabela.service';
import { RefeicaoComponent } from './refeicao/refeicao.component';
import { ExportarRefeicaoComponent } from './exportar-refeicao/exportar-refeicao.component';
import { ExportarRefeicaoService } from './exportar-refeicao/exportar-refeicao.service';
import { VincularComponent } from './vincular/vincular.component';
import { PacienteVinculadoComponent } from './paciente-vinculado/paciente-vinculado.component';

// MDB Angular Pro
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContentComponent,
    GlicemiaComponent,
    LoginComponent,
    RegistroComponent,
    ExportartabelaComponent,
    RefeicaoComponent,
    ExportarRefeicaoComponent,
    VincularComponent,
    PacienteVinculadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTableModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [RegistroService, AuthService, GlicemiaService, ExportartabelaService, ExportarRefeicaoService, VincularService, PacienteVinculadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
