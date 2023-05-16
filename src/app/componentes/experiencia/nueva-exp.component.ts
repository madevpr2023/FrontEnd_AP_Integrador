import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit{

  empresa: string = '';
  puesto: string = '';
  anioInicio: number = 0;
  anioFin: number = 0;
  descripcion: string = '';


  constructor(private experienciaserv: ExperienciaService, private router: Router){}

  

  ngOnInit(): void {
    
  }

  Creacion():void{

    const exp = new Experiencia(this.empresa, this.puesto, this.anioInicio, this.anioFin, this.descripcion);

    this.experienciaserv.guardado(exp).subscribe({

      next:() => {

        alert("Experiencia añadida");

        this.router.navigate(['']);

      }, error:() =>{

        alert("Fallo");

        this.router.navigate(['']);

      }

    })

  }


}
