import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit{

  nombre:string = '';
  img:string = '';
  descripcion:string = '';
  link:string = '';

  constructor(private proyectoserv:ProyectosService, private router: Router, public ImageService: ImageService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    
  }

  Creacion():void{

    const proyecto = new Proyectos(this.nombre, this.img, this.descripcion, this.link);

    proyecto.img = this.ImageService.url;


    this.proyectoserv.guardado(proyecto).subscribe({

      next:()=>{

        alert("Proyecto añadido");

        this.router.navigate(['']);

      }, error:()=>{

        alert("Fallo");

        this.router.navigate(['']);

      }

    })

  }

  UploadImage($event:any){

    const id = this.activatedroute.snapshot.params['id'];

    const name = "proyecto_" + id;

    this.ImageService.UploadImage($event, name);

  }

  

}
