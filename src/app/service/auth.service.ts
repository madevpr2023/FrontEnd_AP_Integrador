import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {NewUser} from '../model/new-user';
import { LoginUsuario } from '../model/login-usuario';
import { Jwtdto } from '../model/jwtdto';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'https://app-springboot.onrender.com/accountlogin/';

  constructor(private http:HttpClient) {}

  public usuarionuevo(newuser: NewUser):Observable<any>{

    return this.http.post<any>(this.URL + 'nuevouser', newuser);

  }

  public Login(loginUsuario: LoginUsuario):Observable<Jwtdto>{

    return this.http.post<Jwtdto>(this.URL + 'loginusuario', loginUsuario);



  }
}
