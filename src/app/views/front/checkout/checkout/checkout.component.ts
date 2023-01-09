import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  @ViewChild('fileInput',{static: false}) 
  fileInput!:ElementRef;
  
  constructor(private http: HttpClient){}
  
  onFileUpload(){
     const imageBlob= this.fileInput.nativeElement.files[0]
    const file = new FormData();
    file.set('file',imageBlob);
    console.log(imageBlob)
  this.http.post('http://localhost:4000/',file).subscribe(resp=>console.log(resp))
    }
}
