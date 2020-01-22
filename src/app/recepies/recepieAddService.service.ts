import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recepie } from './recepie.model';
import { Injectable } from '@angular/core';

@Injectable()
export class recepieAddService{

    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json'
            }
        )
      };

    constructor(private http:HttpClient){}
    

    storeRecepie(recepie:Recepie){
        return this.http.post<Recepie>("http://localhost:8080/RecepieController/recepies/",recepie,this.httpOptions);
    }

    getAllRecepie(){
        return this.http.get<Recepie[]>("http://localhost:8080/RecepieController/recepies/getAllRecepies",this.httpOptions);
    }

    deleteRecepie(recepie:Recepie){
        console.log("http://localhost:8080/RecepieController/recepies/delete/"+recepie);
        return this.http.post("http://localhost:8080/RecepieController/recepies/delete/",recepie,this.httpOptions);
    }




}