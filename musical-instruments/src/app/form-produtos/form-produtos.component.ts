import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = "Cadastro de Produtos";
  constructor() { }
  ngOnInit() { }
}
