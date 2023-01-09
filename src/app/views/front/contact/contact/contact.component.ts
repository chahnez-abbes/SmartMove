import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
  
  }

constructor(private readonly geolocation$: GeolocationService){

}


}