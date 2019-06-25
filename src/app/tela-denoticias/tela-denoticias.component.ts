import { Component, OnInit } from '@angular/core';
import {GerenciadorService} from '../gerenciador.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tela-denoticias',
  templateUrl: './tela-denoticias.component.html',
  styleUrls: ['./tela-denoticias.component.css']
})
export class TelaDenoticiasComponent implements OnInit {
  noticia = null;

 constructor(private genrenciador: GerenciadorService,
             private route: ActivatedRoute,
             private router: Router) {}

  ngOnInit() {
   const id = this.route.snapshot.paramMap.get('id');
   this.noticia = this.genrenciador.encontrar(Number.parseInt(id));
  }

}
