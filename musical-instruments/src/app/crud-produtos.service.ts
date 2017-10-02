import { Injectable } from '@angular/core';
import { Produto } from "app/produto";

@Injectable()
export class CrudProdutosService {
  produtos: Produto[] = [
    { codigo: 1, nome:"arroz", preco:3.47 },
    { codigo: 2, nome:"feijao", preco:4.52 }
  ];
  autoIncrement: number=3;
  constructor() { }
  getProdutos() {
    return this.produtos;
  }

  adicionarProduto(produto: Produto) {
    produto.codigo=this.autoIncrement++;
    this.produtos.push(produto);
  }
}