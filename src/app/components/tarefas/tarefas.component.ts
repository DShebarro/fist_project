import { Component, inject } from '@angular/core';
import { TarefaService} from '../../services/tarefa.service';
import { Tarefas } from '../../interfaces/tarefas';

@Component({
  selector: 'app-tarefas',
  imports: [],
  standalone: true,
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent {
  private tarefaServico = inject(TarefaService);
  listaTarefas: Tarefas[] = [];
  ngOnInit() {
    this.listaTarefas = this.tarefaServico.getTarefas();
  }
  toogleConcluido(tarefa: Tarefas) {
    tarefa.concluido = !tarefa.concluido;
  }
}
