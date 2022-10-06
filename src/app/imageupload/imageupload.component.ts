import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {

  selectedImage :any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  imageUpload(event: any){
    this.selectedImage = <File>event.target.files[0];


  }
  uploadImage(){
    const imageData = new FormData();
    imageData.append("image", this.selectedImage, this.selectedImage.name);
    this.http.post<File>("https://image-upload-46634-default-rtdb.firebaseio.com/imageUpload.json", imageData ,{
      reportProgress: true,
      observe: "events"
    }).subscribe( response => {
      console.log(response)
    })
  }
}
