import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produtos';
import {Tarefas} from '../interfaces/tarefas';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  getProdutos(): Produto[] {
    return [
      { nome: 'Notebook', promocao: true },
      { nome: 'Mouse', promocao: false },
      { nome: 'PC Gamer', promocao: true },
      { nome: 'Mouse Bluethooh', promocao: false },
      { nome: 'Teclado', promocao: true },
    ];
  }
}
