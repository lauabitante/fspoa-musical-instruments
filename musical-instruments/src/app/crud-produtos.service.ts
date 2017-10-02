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

  getProdutoPorCodigo(codigo: number) {
    return(this.produtos.find(produto => produto.codigo==codigo));
  }

  removerProduto(produto: Produto) {
    let indice = this.produtos.indexOf(produto, 0);
    if (indice > -1) {
      this.produtos.splice(indice, 1);
    }
  }

  atualizaProduto(codigo: number, produto: Produto) {
    let indice = this.produtos.indexOf(this.getProdutoPorCodigo(codigo), 0);
    this.produtos[indice] = produto;
  }
}