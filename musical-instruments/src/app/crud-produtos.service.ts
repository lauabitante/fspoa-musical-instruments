import { Injectable } from '@angular/core';
import { Produto } from "app/produto";

@Injectable()
export class CrudProdutosService {
  produtos: Produto[] = [
    { codigo: 1, nome:"arroz", preco:3.47 },
    { codigo: 2, nome:"feijao", preco:4.52 }
  ]
  constructor() { }
  getProdutos() {
    return this.produtos;
  }
}