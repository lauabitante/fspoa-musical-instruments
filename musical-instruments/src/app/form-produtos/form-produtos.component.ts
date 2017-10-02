import { Component, OnInit } from '@angular/core';
import { CrudProdutosService } from "app/crud-produtos.service";
import { Produto } from "app/produto";

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})

export class FormProdutosComponent implements OnInit {
  titulo = "Cadastro de Produtos";
  produto:Produto;

  constructor(private servico:CrudProdutosService) { }

  ngOnInit() { 
    this.produto = new Produto();
  }

  salvarProduto() {
    this.servico.adicionarProduto(this.produto);
    this.produto = new Produto();
  }

  cancelar() {
    this.produto = new Produto();
  }
}