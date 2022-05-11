import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparadorImagensComponent } from './componentes/comparador-imagens/comparador-imagens.component';
import { TelaImagensComponent } from './componentes/tela-imagens/tela-imagens.component';
import { JanelaModalClassificarComponent } from './componentes/janela-modal-classificar/janela-modal-classificar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ComparadorImagensComponent,
    TelaImagensComponent,
    JanelaModalClassificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
