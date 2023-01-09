import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/views/services/users.service';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {
  ngOnInit(): void {
  
  }
  dataArray: any
  email: any
  fav: any
  constructor( private user:UsersService){
this.email=localStorage.getItem('email')

    this.user.getOneuser(this.email).subscribe(res=>{console.log(res)
    this.dataArray=res
    this.fav=this.dataArray.favorit

    console.log(this.fav)
    })
  }
 

  clear(){
  }
}
