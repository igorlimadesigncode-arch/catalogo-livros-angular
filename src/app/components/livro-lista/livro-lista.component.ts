import { Component, OnInit } from '@angular/core';
import { Editora } from '../../models/editora';
import { Livro } from '../../models/livro';
import { ControleEditoraService } from '../../services/controle-editora.service';
import { ControleLivrosService } from '../../services/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private readonly servEditora: ControleEditoraService,
    private readonly servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => this.servEditora.getNomeEditora(codEditora);
}
