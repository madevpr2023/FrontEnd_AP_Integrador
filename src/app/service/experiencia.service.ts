import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://app-springboot.onrender.com/Experiencia/';


  constructor(private http: HttpClient) { }

  public listado(): Observable<Experiencia[]>{

    return this.http.get<Experiencia[]>(this.URL + 'listadoexperiencia');

  }

  public detalle(id:number):Observable<Experiencia>{

    return this.http.get<Experiencia>(this.URL + `experienciadet/${id}`);

  }

  public guardado(experiencia:Experiencia):Observable<any>{

    return this.http.post<any>(this.URL + 'crearexperiencia', experiencia);

  }

  public actualizar(id:number, experiencia:Experiencia):Observable<any>{

    return this.http.put<any>(this.URL + `editarexperiencia/${id}`, experiencia);

  }

  public eliminar(id:number):Observable<any>{

    return this.http.delete<any>(this.URL + `eliminarexperiencia/${id}`);

  }
}
