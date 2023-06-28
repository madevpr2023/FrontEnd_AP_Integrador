import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Softskills } from '../model/softskills';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoftskillsService {

  URL = environment.URL + 'Soft_Skill/';

  constructor(private http:HttpClient) { }

  public listado(): Observable<Softskills[]>{

    return this.http.get<Softskills[]>(this.URL + 'listadosoftskill');

  }

  public detalle(id:number):Observable<Softskills>{

    return this.http.get<Softskills>(this.URL + `softskilldet/${id}`);

  }

  public guardado(softskill:Softskills):Observable<any>{

    return this.http.post<any>(this.URL + 'crearsoftskill', softskill);

  }

  public actualizar(id:number, softskill:Softskills):Observable<any>{

    return this.http.put<any>(this.URL + `editarsoftskill/${id}`, softskill);

  }

  public eliminar(id:number):Observable<any>{

    return this.http.delete<any>(this.URL + `eliminarsoftskill/${id}`);

  }
}
