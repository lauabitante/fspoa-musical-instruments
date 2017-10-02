import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
