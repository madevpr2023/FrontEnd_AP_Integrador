import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nameUser!:string;
  password!:string;
  roles:String[] = [];

  constructor(private authService: AuthService, private tokenService:TokenService, private router: Router){}

  ngOnInit(): void {
    
    if(this.tokenService.getToken()){

      this.isLogged = true;

      this.isLogginFail = false;

      this.roles = this.tokenService.getAuthorities();

    }

  }

  onLogin():void{

    this.loginUsuario = new LoginUsuario(this.nameUser, this.password);

    this.authService.Login(this.loginUsuario).subscribe({

      next:(data) =>{

        this.isLogged = true;

        this.isLogginFail = false;

        this.tokenService.SetToken(data.token);

        this.tokenService.SetNameUser(data.nameUser);

        this.tokenService.SetAuthorities(data.authorities);

        this.roles = data.authorities;

        this.router.navigate(['']);

      },

      error:() => {

        this.isLogged = false;

        this.isLogginFail = true;

        alert("Error al conectarse");

        

      }

    }

    );
    

  }


}
