import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaDenoticiasComponent } from './tela-denoticias/tela-denoticias.component';
import { TelaDeCadastroComponent } from './tela-de-cadastro/tela-de-cadastro.component';
import { TelaPublicarComponent } from './tela-publicar/tela-publicar.component';
import { TelaEstatisticasComponent } from './tela-estatisticas/tela-estatisticas.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaDenoticiasComponent,
    TelaDeCadastroComponent,
    TelaPublicarComponent,
    TelaEstatisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
