import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroDadosComponent } from './components/livro-dados/livro-dados.component';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: '**', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
