# Trabalho Prático: Catálogo de Livros em Angular

Disciplina **DGT2809 - Aprofundamento em Desenvolvimento Front-End**.

Este projeto é uma aplicação **Angular** de catálogo de livros, com listagem, inclusão e exclusão de itens, navegação por rotas e formulário com validação, estilizada com **Bootstrap**.

## Modelo de dados

| Classe | Descrição |
|---|---|
| Livro | Representa um livro do catálogo (título, resumo, autores, editora) |
| Editora | Representa a editora, identificada por código e nome |

## Estrutura do projeto

- **Classes:** `Livro` e `Editora`.
- **Serviços:** `ControleLivros` (gerencia a lista de livros) e `ControleEditora` (fornece as editoras).
- **Componentes:** `LivroLista` (exibe e exclui livros) e `LivroDados` (formulário de inclusão).
- **Rotas:** `/lista` e `/dados`.

## Funcionalidades

### Lista de livros (`/lista`)

- Exibe os livros cadastrados em tabela.
- Mostra o nome da editora de cada livro.
- Permite excluir um livro.

### Cadastro de livros (`/dados`)

- Formulário com título, resumo, editora e autores (um por linha).
- Uso de `FormsModule` e `ngModel`.
- Validação nativa do navegador (`ngNativeValidate`).
- Após salvar, redireciona para a lista.

## Como executar

1. Instale o Node.js e abra o terminal na pasta do projeto.
2. Instale as dependências:
bash npm install

3. Inicie a aplicação:
bash npm start

4. Acesse no navegador: http://localhost:4200/

No PowerShell do Windows, se o `npm` for bloqueado por política de execução, use `npm.cmd install` e `npm.cmd start`.

Para encerrar o servidor, pressione `Ctrl + C`.

## Tecnologias

- Angular
- TypeScript
- Bootstrap
- HTML5 e CSS3

## Observações

- A pasta `node_modules` não faz parte do repositório; ela é gerada pelo `npm install`.
- Abrir `src/index.html` direto como arquivo resulta em página em branco; é necessário rodar o servidor do Angular.
- Os dados ficam em memória: ao recarregar a página, a lista volta ao estado inicial.

## Ambiente

- VS Code e Windows
- Node.js e npm
- Navegador moderno (Chrome, Edge ou Firefox)

## Autor

Igor Lima
