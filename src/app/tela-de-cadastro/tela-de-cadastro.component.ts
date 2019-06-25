import { Component, OnInit } from '@angular/core';
import {GerenciadorService} from '../gerenciador.service';

@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.component.html',
  styleUrls: ['./tela-de-cadastro.component.css']
})
export class TelaDeCadastroComponent implements OnInit {
  titulo = null;
  autor = null;
  conteudo = null;
 constructor(private genrenciador: GerenciadorService) {}

  ngOnInit() {
  }

  salvar(form) {
   this.genrenciador.salvar(this.titulo, this.autor, this.conteudo);
   form.reset();
  }
}
