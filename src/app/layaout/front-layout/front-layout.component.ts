import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/views/services/cart.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit{
  dataArray: any;

constructor(private cart: CartService){
 
}

ngOnInit(): void {
  this.cart.cart().subscribe(data=>{
    this.dataArray= data
  
  })
}

}
