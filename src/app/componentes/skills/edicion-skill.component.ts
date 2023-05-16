import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardskills } from 'src/app/model/hardskills';
import { Softskills } from 'src/app/model/softskills';
import { HardskillService } from 'src/app/service/hardskill.service';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-edicion-skill',
  templateUrl: './edicion-skill.component.html',
  styleUrls: ['./edicion-skill.component.css']
})
export class EdicionSkillComponent implements OnInit{

  ss: any | Softskills = null;

  constructor(private softskillserv: SoftskillsService, private activatedrouter:ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    
    const id = this.activatedrouter.snapshot.params['id'];

    this.softskillserv.detalle(id).subscribe({

      next:(data) => {

        this.ss = data;

      },

      error:() => {

        alert("Error al modificar soft skill");

        this.router.navigate(['']);

      }
      

    })

    

  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.softskillserv.actualizar(id, this.ss).subscribe(

      {

        next:() => {

          this.router.navigate(['']);

        }, error:() => {

          alert("Error al modificar soft skill");

          this.router.navigate(['']);

        }

      }

    )

   


  }

  



}
