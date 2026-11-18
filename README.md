# Catálogo de Livros — Angular

Projeto do trabalho prático de **DGT2809 — Aprofundamento em Desenvolvimento Front-End**. Implementa um catálogo de livros com serviços injetáveis, componentes Angular, formulários com `FormsModule` e navegação interna por rotas.

## Requisitos

- Node.js 20.11+ (recomendado: versão LTS atual)
- npm 10+

## Executar localmente

1. Extraia a pasta do projeto e abra `catalogo-livros-angular` no VS Code.
2. Abra o terminal integrado na raiz do projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie a aplicação:

   ```bash
   npm.cmd start
   ```

5. Abra <http://localhost:4200/>.

Para validar a compilação de produção, use `npm.cmd run build` no PowerShell. No terminal Git Bash, os comandos equivalentes são `npm install`, `npm start` e `npm run build`.

## Funcionalidades

- Lista inicial de livros, editoras e autores.
- Exclusão de livros da lista.
- Formulário para incluir livro com título obrigatório, editora obrigatória, resumo e autores (um por linha).
- Rotas `/lista` e `/dados`; a rota inicial redireciona para a lista.
- Os dados são mantidos em memória durante a execução e voltam aos exemplos iniciais ao recarregar a aplicação.

## Estrutura principal

- `src/app/models`: classes `Livro` e `Editora`.
- `src/app/services`: serviços de controle de livros e editoras.
- `src/app/components`: componentes de listagem e cadastro.
- `src/app/app-routing.module.ts`: rotas da aplicação.

## Publicar no GitHub e enviar ao professor

1. Crie um repositório vazio no GitHub (sem inicializar com README, `.gitignore` ou licença).
2. Abra um terminal na pasta raiz deste projeto e execute, substituindo a URL pelo endereço do seu repositório:

   ```bash
   git init
   git add .
   git commit -m "Entrega do catálogo de livros em Angular"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```

3. Copie o endereço da página do repositório e cole na Sala de Aula Virtual, em **Trabalhos**. Se o repositório for privado, convide o professor como colaborador.

> Não envie `node_modules` nem `dist`; ambos já estão no `.gitignore`. O arquivo `package-lock.json` é criado pelo `npm install` e deve ser incluído no commit para fixar as versões instaladas.
