import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacioncomp } from '../model/educacioncomp';



@Injectable({
  providedIn: 'root'
})
export class EducacioncompService {

  URL = 'https://app-springboot.onrender.com/Educacion_Complementaria/';

  constructor(private http:HttpClient) { }

  public listado(): Observable<Educacioncomp[]>{

    return this.http.get<Educacioncomp[]>(this.URL + 'listadoeducacioncomplementaria');

  }

  public detalle(id:number):Observable<Educacioncomp>{

    return this.http.get<Educacioncomp>(this.URL + `educacioncomplementariadet/${id}`);

  }

  public guardado(educacioncomp:Educacioncomp):Observable<any>{

    return this.http.post<any>(this.URL + 'creareducacioncomplementaria', educacioncomp);

  }

  public actualizar(id:number, educacioncomp:Educacioncomp):Observable<any>{

    return this.http.put<any>(this.URL + `editareducacioncomplementaria/${id}`, educacioncomp);

  }

  public eliminar(id:number):Observable<any>{

    return this.http.delete<any>(this.URL + `eliminareducacioncomplementaria/${id}`);

  }
}
