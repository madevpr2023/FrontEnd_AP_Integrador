import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardskills } from '../model/hardskills';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HardskillService {

  URL = 'https://app-springboot.onrender.com/Hard_Skill/';

  constructor(private http:HttpClient) { }

  public listado(): Observable<Hardskills[]>{

    return this.http.get<Hardskills[]>(this.URL + 'listadohardskill');

  }

  public detalle(id:number):Observable<Hardskills>{

    return this.http.get<Hardskills>(this.URL + `hardskilldet/${id}`);

  }

  public guardado(hardskill:Hardskills):Observable<any>{

    return this.http.post<any>(this.URL + 'crearhardskill', hardskill);

  }

  public actualizar(id:number, hardskill:Hardskills):Observable<any>{

    return this.http.put<any>(this.URL + `editarhardskill/${id}`, hardskill);

  }

  public eliminar(id:number):Observable<any>{

    return this.http.delete<any>(this.URL + `eliminarhardskill/${id}`);

  }
}
