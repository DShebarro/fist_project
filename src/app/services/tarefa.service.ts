import { Injectable } from '@angular/core';
import { Tarefas } from '../interfaces/tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  getTarefas(): Tarefas[] {
    return [
      { titulo: 'Estudar Angular', descricao: 'Fazer um componente de tarefas', concluido: false },
      { titulo: 'Exercicio', descricao: 'Realizar os exercicios em sala', concluido: false },
      { titulo: 'Atividade', descricao: 'Fazer a atividade para casa', concluido: false },
    ];
  }
}
