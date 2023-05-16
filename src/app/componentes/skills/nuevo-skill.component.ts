import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardskills } from 'src/app/model/hardskills';
import { Softskills } from 'src/app/model/softskills';
import { HardskillService } from 'src/app/service/hardskill.service';
import { ImageService } from 'src/app/service/image.service';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css']
})
export class NuevoSkillComponent implements OnInit{

  habilidad:string = '';
  porcentaje:number = 0;

  //HardSkill

  habilidad1:string = '';
  porcentaje1:number = 0;
  img:string = '';

  constructor(private softskillserv:SoftskillsService, private hardskillserv: HardskillService, private router: Router, public ImageService: ImageService, private activatedroute: ActivatedRoute){}

  ngOnInit(): void {
    
  }

  Creacion():void{

    const ss = new Softskills(this.habilidad, this.porcentaje);

    this.softskillserv.guardado(ss).subscribe({

      next:() => {

        alert("Soft Skill añadido");

        this.router.navigate(['']);

      }, error:() =>{

        alert("Fallo");

        this.router.navigate(['']);

      }

    })


  }

  Creacion1():void{

    const hs = new Hardskills(this.habilidad1, this.porcentaje1, this.img);

    hs.img = this.ImageService.url;

    this.hardskillserv.guardado(hs).subscribe({

      next:()=>{

        alert("Hard Skill añadido");

        this.router.navigate(['']);

      }, error:()=>{

        alert("Fallo");

        this.router.navigate(['']);

      }

    })

  }

  UploadImage($event:any){

    const id = this.activatedroute.snapshot.params['id'];

    const name = "photo" + id;

    this.ImageService.UploadImage($event, name);

  }


}
