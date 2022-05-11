/****************************************************


Lembrar que o 
  HostListener
Funciona melhor no Componente que no serviço:

https://stackoverflow.com/questions/39592972/is-it-possible-to-use-hostlistener-in-a-service-or-how-to-use-dom-events-in-an

****************************************************/

//Essencial para capturar os eventos do teclado:
import { HostListener, Output,EventEmitter } from '@angular/core';

// Coletando o parâmetro ETIQUETA pode-se consultar o DB para ver as classificações

import { ActivatedRoute } from '@angular/router';

// Serviço para consumir a API (método GET) 

import { GetFotosBucketService } from '../../servicos/get-fotos-bucket/get-fotos-bucket.service';

import { GetFotosDbService } from '../../servicos/get-fotos-db/get-fotos-db.service';

import { Component, OnInit } from '@angular/core';



export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,

  UP_ARROW = 38,
  DOWN_ARROW = 40
}


@Component({
  selector: 'app-tela-imagens',
  templateUrl: './tela-imagens.component.html',
  styleUrls: ['./tela-imagens.component.css']
})



export class TelaImagensComponent implements OnInit {


  etiqueta="juridico";

  indice_imagen=0;

  maximo_indice_imagen=0;

  imagem: String[]=[];

  
  constructor(
    private getFotosBucketService: GetFotosBucketService,
    private getFotosDBService: GetFotosDbService,
    private activatedRoute: ActivatedRoute
    ) {
  }
  ngOnInit(): void {
    const parametro = this.activatedRoute.snapshot.paramMap.get('parametro');
    this.etiqueta=parametro+"";
    console.log("this.etiqueta---->"+this.etiqueta);
    this.getUrl_imagem_METODO();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.increment();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.decrement();
    }

  //Verticais para acelerar a navegação:

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.increment_10();
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.decrement_10();
    }
  }
  /*
  Auxiliares del HostListener
  */
  increment() {    

    if((this.indice_imagen+1)<this.maximo_indice_imagen)
    {
      this.indice_imagen+=2;    
    }    
  }

  decrement() {

    if(this.indice_imagen>0)
    {
      this.indice_imagen-=2;
    }    
  }
//Verticais para acelerar a navegação, em passos de 10
  increment_10() {
    
    if((this.indice_imagen+10)<this.maximo_indice_imagen)
    {
      this.indice_imagen+=10;
    }    
  }

  decrement_10() {

    if(this.indice_imagen>10)
    {
      this.indice_imagen-=10;
    }     
  }
/****************************************************


****************************************************/

// Chama o serviço para obtém todas as fotos

url_foto : String[] | undefined;  

getUrl_imagem_METODO() {
  
  this.getFotosBucketService.getUrl_imagem(this.etiqueta).subscribe((url_foto: String[]) => {
    this.imagem = url_foto.reverse();    
    this.maximo_indice_imagen=url_foto.length;  
    
  });
  
}

///////
}


