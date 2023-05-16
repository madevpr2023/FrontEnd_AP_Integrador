import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{

  person: any | Persona = null;

  constructor(private personaserv: PersonaService, private tokenService:TokenService){}

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarPersona();

    if(this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }

  }

  cargarPersona():void{

  
  this.personaserv.detalle(1).subscribe({

      next:(data) =>{

        this.person = data;

      }

    })

  } 

}
