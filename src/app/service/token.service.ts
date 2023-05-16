import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

const NAMEUSER_KEY = 'AuthnameUser';

const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles:Array<String> = [];

  public SetToken(token:string):void{

    window.sessionStorage.removeItem(TOKEN_KEY);

    window.sessionStorage.setItem(TOKEN_KEY, token);

  }

  public getToken():string{

    return window.sessionStorage.getItem(TOKEN_KEY)!;

  }

  public SetNameUser(nameUser:string):void{

    window.sessionStorage.removeItem(NAMEUSER_KEY);

    window.sessionStorage.setItem(NAMEUSER_KEY, nameUser);


  }

  public getNameUser():String{

    return window.sessionStorage.getItem(NAMEUSER_KEY)!;

  }

  public SetAuthorities(authorities:string[]):void{

    window.sessionStorage.removeItem(AUTHORITIES_KEY);

    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));

  }

  public getAuthorities():String[]{

    this.roles = [];

    if(sessionStorage.getItem(AUTHORITIES_KEY)){

      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {

        this.roles.push(authority.authority);
        
      });

    }

    return this.roles;

  }

  public logOut():void{

    window.sessionStorage.clear();

  }


  constructor() { }
}
