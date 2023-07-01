import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://app-springboot.onrender.com/Perfil/';

  

  constructor(private http:HttpClient) {}

  public detalle(id:number):Observable<Persona>{

    return this.http.get<Persona>(this.URL + `perfildet/${id}`);

  }


  public actualizar(id:number, persona:Persona):Observable<any>{

    return this.http.put<any>(this.URL + `editarperfil/${id}`, persona);

  }

  
}
