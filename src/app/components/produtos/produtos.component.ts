import {Component, inject} from '@angular/core';
import { ProdutoService } from "../../services/produtos.service";
import {Produto} from "../../interfaces/produtos";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  private produtoService = inject(ProdutoService);

  listaProdutos: Produto[] = [];

  ngOnInit() {
    this.listaProdutos = this.produtoService.getProdutos();
  }
}
