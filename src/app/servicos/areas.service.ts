import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs';
import { Observable } from "rxjs";
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  contatosUrl = "https://tavares007.herokuapp.com/areas";
  //contatosUrl = "http://localhost:8080/areas";
  contatosUr2 = "https://tavares007.herokuapp.com/eventos/";
  //contatosUr2 = "http://localhost:8080/eventos/";
  contatosUr3 = "https://tavares007.herokuapp.com/monitorias/";
  //contatosUr3 = "http://localhost:8080/monitorias/";
  monitoria:any;
  areaPesquisa:any;
    
  constructor( private http: HttpClient, private http2: Http) { }

  setMsg(x,y){
    this.monitoria=x;
    this.areaPesquisa=y;
  }
  getMsg(){

  }

  listar(x) {
    if (x==1){
    return this.http.get<Array<any>>(this.contatosUrl);
    }else if(x==2){
      return this.http.get<Array<any>>(this.contatosUr2);
    }
  }

  
  criarEvento(evento: any) {

    return new Promise((resolve, reject) => {
      
      let url = this.contatosUr2;
      this.http.post(this.contatosUr2, evento).subscribe((result: any) => {
        console.log("Evento criado com sucesso");
        
      },
      (error) => {
        reject(error.json());
        
      });
    }); 
    
  }


  updateEventos(evento:Array<any>,id) {
    

    return new Promise((resolve, reject) => {
      
      let url = this.contatosUr2 + id;
      this.http.put(url, evento).subscribe((result: any) => {
        console.log("Atualizado com sucesso");
      },
      (error) => {
        reject(error.json());
        
      });
    });    
  }
  update(monitoria:any) {
    
    return new Promise((resolve, reject) => {
      let url = this.contatosUr3 + monitoria.id;
      
      this.http.put(url, monitoria).subscribe((result: any) => {
        console.log("Atualizado com sucesso");
        console.log(url);
      },
      (error) => {
        reject(error.json());
        
      });
    });    
  }

  deletar(){}
}
