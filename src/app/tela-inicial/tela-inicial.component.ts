import { Component, OnInit } from '@angular/core';
import {GerenciadorService} from '../gerenciador.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

 constructor(private genrenciador: GerenciadorService) {}

  ngOnInit() {}

}
