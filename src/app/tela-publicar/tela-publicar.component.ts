import { Component, OnInit } from '@angular/core';
import {GerenciadorService} from '../gerenciador.service';

@Component({
  selector: 'app-tela-publicar',
  templateUrl: './tela-publicar.component.html',
  styleUrls: ['./tela-publicar.component.css']
})
export class TelaPublicarComponent implements OnInit {

   constructor(private genrenciador: GerenciadorService) {}

  ngOnInit() {
  }

}
