import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CrudProdutosService } from "app/crud-produtos.service";

import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CrudProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
