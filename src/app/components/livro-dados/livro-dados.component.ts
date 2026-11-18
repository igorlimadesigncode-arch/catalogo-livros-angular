import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../../models/editora';
import { Livro } from '../../models/livro';
import { ControleEditoraService } from '../../services/controle-editora.service';
import { ControleLivrosService } from '../../services/controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  autoresForm = '';
  editoras: Array<Editora> = [];

  constructor(
    private readonly servEditora: ControleEditoraService,
    private readonly servLivros: ControleLivrosService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livro.codEditora = this.editoras[0]?.codEditora ?? 0;
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm
      .split('\n')
      .map((autor) => autor.trim())
      .filter((autor) => autor.length > 0);
    this.servLivros.incluir(this.livro);
    void this.router.navigateByUrl('/lista');
  };
}
