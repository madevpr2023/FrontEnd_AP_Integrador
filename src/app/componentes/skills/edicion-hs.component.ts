import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardskills } from 'src/app/model/hardskills';
import { HardskillService } from 'src/app/service/hardskill.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edicion-hs',
  templateUrl: './edicion-hs.component.html',
  styleUrls: ['./edicion-hs.component.css']
})
export class EdicionHsComponent implements OnInit{

  hs: any | Hardskills = null;

  constructor(private hardskillserv: HardskillService, private activatedrouter:ActivatedRoute, private router:Router, public ImageService:ImageService){

  }

  ngOnInit(): void {
    
    const id = this.activatedrouter.snapshot.params['id'];

    this.hardskillserv.detalle(id).subscribe({

      next:(data) => {

        this.hs = data;

      }, error:()=>{

        alert("Error al modificar hard skill");

        this.router.navigate(['']);

      }


    })

  }

  Actualizacion():void{

    const id = this.activatedrouter.snapshot.params['id'];

    this.hs.img = this.ImageService.url;

    this.hardskillserv.actualizar(id, this.hs).subscribe({

      next:()=> {

        this.router.navigate(['']);

      }, error:()=>{

        alert("Error al modificar hard skill");

        this.router.navigate(['']);

      }



    })



  }

  UploadImage($event:any){

    const id = this.activatedrouter.snapshot.params['id'];

    const name = "hardskill_" + id;

    this.ImageService.UploadImage($event, name);

  }



}
