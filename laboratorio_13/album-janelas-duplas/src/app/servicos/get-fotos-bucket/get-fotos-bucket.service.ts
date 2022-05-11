/*
Entrega a lista de pastas na FONTE 
*/

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GetFotosBucketService {

  url = 
  "http://localhost:3001/";
 
 // injetando o HttpClient
 constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
        
    // Obtem os nomes das Imagens
    getUrl_imagem(etiqueta: String): Observable<String[]> {
      return this.httpClient.get<String[]>(this.url+etiqueta)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
////////////////////// 
}
