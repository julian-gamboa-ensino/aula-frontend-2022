import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componente para visualizar as imagens com ajuda do Bootstrap:

import { TelaImagensComponent } from './componentes/tela-imagens/tela-imagens.component';
import {AppComponent} from './app.component';

const routes: Routes = [
    //Por exemplo "http://localhost:4200/novos/novos" visualiza as fotos presentas na etiqueta NOVOS
   { path: ':parametro/:parametro', component: TelaImagensComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

