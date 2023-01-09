import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  datarecived: any

  constructor(private asd:AuthService,private route:Router){

  }



  login(f:any){
    
    
    
    let data=f.value
  
    console.log(data)
  this.asd.register(data).subscribe((resp)=>{
   
  console.log(resp)
    this.datarecived=resp
   
  
    this.asd.saveDataProfile(this.datarecived)
  
  let roles = localStorage.getItem("roles")
  console.log(roles)
   
  
  },err=>console.log(err))
  
  
  
  }
}
