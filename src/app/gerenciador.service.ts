import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {
  noticias = [];
  autores = [
    {nome: "João",
    publicacoes: 0},
    {nome: "Larisse",
    publicacoes: 0},
    {nome: "Pedro",
    publicacoes: 0}];
  constructor() { }

  salvar(titulo, autor, conteudo) {
    this.noticias = JSON.parse(localStorage.getItem("noticias"));
    let noticia = {
      id: this.noticias.length,
      titulo,
      autor,
      conteudo,
      publicada: false,
      visualisacoes: 0,
    };
    this.noticias.push(noticia);
    localStorage.setItem("noticias", JSON.stringify(this.noticias));
  }

  listaAutores() {
    return this.autores.sort();
  }

  listaNoticias() {
    let lista = JSON.parse(localStorage.getItem("noticias")).sort(function(a, b) {return b.visualisacoes - a.visualisacoes});
    return lista;
  }

  encontrar(id) {
    let noticia = JSON.parse(localStorage.getItem("noticias")).find(n => n.id === n.id);
    return noticia;
  }

  publicar(id) {
   this.noticias =  JSON.parse(localStorage.getItem("noticias"));
   let noticia = this.noticias.find(n => n.id === n.id).publicada = true;
   localStorage.setItem("noticias", JSON.stringify(this.noticias));
  }

  visualizou(id) {
   this.noticias =  JSON.parse(localStorage.getItem("noticias"));
   let noticia = this.noticias.find(n => n.id === n.id).visualisacoes += 1;
   localStorage.setItem("noticias", JSON.stringify(this.noticias));
  }

}
