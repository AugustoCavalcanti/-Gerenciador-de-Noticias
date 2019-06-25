import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TelaInicialComponent} from './tela-inicial/tela-inicial.component';
import {TelaDeCadastroComponent} from './tela-de-cadastro/tela-de-cadastro.component';
import {TelaDenoticiasComponent} from './tela-denoticias/tela-denoticias.component';
import {TelaPublicarComponent} from './tela-publicar/tela-publicar.component';
import {TelaEstatisticasComponent} from './tela-estatisticas/tela-estatisticas.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'cadastro', component: TelaDeCadastroComponent },
  { path: 'noticia/:id', component: TelaDenoticiasComponent },
  { path: 'publicar', component: TelaPublicarComponent },
  { path: 'estatisticas', component: TelaEstatisticasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
