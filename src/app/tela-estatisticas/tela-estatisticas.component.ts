import { Component, OnInit } from '@angular/core';
import {GerenciadorService} from '../gerenciador.service';

@Component({
  selector: 'app-tela-estatisticas',
  templateUrl: './tela-estatisticas.component.html',
  styleUrls: ['./tela-estatisticas.component.css']
})
export class TelaEstatisticasComponent implements OnInit {

 constructor(private genrenciador: GerenciadorService) {}

  ngOnInit() {
  }

}
