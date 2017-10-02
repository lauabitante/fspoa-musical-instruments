import { Component, OnInit } from '@angular/core';
import { Produto } from "app/produto";
import { CrudProdutosService } from "app/crud-produtos.service";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Tabela de Produtos";
  produtos: Produto[] = [];
  constructor(private servico:CrudProdutosService) { }
  ngOnInit() { 
    this.produtos = this.servico.getProdutos();
  }
}
