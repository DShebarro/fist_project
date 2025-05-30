import { Routes } from '@angular/router';
import { NomeComponenteComponent} from './components/nome-componente/nome-componente.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProdutosComponent} from './components/produtos/produtos.component';
import { TarefasComponent} from './components/tarefas/tarefas.component';

export const routes: Routes = [
  { path: 'nome', component: NomeComponenteComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: '**', redirectTo: 'nome'}
];
