import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage'


@Injectable({
  providedIn: 'root'
})
export class ImageService  {

  url = "";
  
  constructor(private storage:Storage) {}

  UploadImage($event:any, name:string){

    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `imagen/` + name);

    uploadBytes(imgRef, file)

    .then(response => {this.getImages()})

    .catch(error => console.log(error));

    

  }


  getImages(){

    const imagesRef = ref(this.storage, 'imagen')

    listAll(imagesRef)

    .then(async response => {

      for(let item of response.items){

        this.url = await getDownloadURL(item);

        console.log("la Url es: " + this.url);

      }

    })

    .catch(error => console.log(error));
  }

  
}
