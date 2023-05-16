import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import {Observable}  from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://app-springboot.onrender.com/Educacion/';

  constructor(private http:HttpClient) {}

  public listado(): Observable<Educacion[]>{

    return this.http.get<Educacion[]>(this.URL + 'listadoeducacion');

  }

  public detalle(id:number):Observable<Educacion>{

    return this.http.get<Educacion>(this.URL + `educaciondet/${id}`);

  }

  public guardado(educacion:Educacion):Observable<any>{

    return this.http.post<any>(this.URL + 'creareducacion', educacion);

  }

  public actualizar(id:number, educacion:Educacion):Observable<any>{

    return this.http.put<any>(this.URL + `editareducacion/${id}`, educacion);

  }

  public eliminar(id:number):Observable<any>{

    return this.http.delete<any>(this.URL + `eliminareducacion/${id}`);

  }
}
