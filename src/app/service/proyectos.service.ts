import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://app-springboot.onrender.com/Proyectos/';


  constructor(private http:HttpClient) { }

  public listado(): Observable<Proyectos[]>{

    return this.http.get<Proyectos[]>(this.URL + 'listadoproyectos');

  }

  public detalle(id:number):Observable<Proyectos>{

    return this.http.get<Proyectos>(this.URL + `proyectosdet/${id}`);

  }

  public guardado(proyectos:Proyectos):Observable<any>{

    return this.http.post<any>(this.URL + 'crearproyectos', proyectos);

  }

  public actualizar(id:number, proyectos:Proyectos):Observable<any>{

    return this.http.put<any>(this.URL + `editarproyectos/${id}`, proyectos);

  }

  public eliminar(id:number):Observable<any>{

    return this.http.delete<any>(this.URL + `eliminarproyectos/${id}`);

  }
}
