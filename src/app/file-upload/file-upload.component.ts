import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookCRUDService } from '../customservices/book-crud.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  id=0;
  image_url:any;
  constructor(private activeRoute:ActivatedRoute,private bookcrud:BookCRUDService,private router:Router){
    const routeParam=this.activeRoute.snapshot.paramMap.get("id")
    if(routeParam!=null)
      this.id=parseInt(routeParam);

    }
  getFile(ev:any){
    console.log("ev",ev)
    this.image_url = ev.target.files[0];
  }
  upload(){
    if(this.image_url!=undefined){
      const obs = this.bookcrud.uploadBookPic(this.id,this.image_url)
      console.log("obs",obs)
      obs.subscribe({
        next:(obj:any)=>{
            if(obj!=undefined){
            window.alert("Image uploaded successfully....");
            this.router.navigate(["/showBook"])
            }
            else
              window.alert("No change....");
        },
        error:(err)=>{
          console.log(err);
          window.alert("Something went wrong while uploading image....")
        }
      })
    }
    
  }

}
