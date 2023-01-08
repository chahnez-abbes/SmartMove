import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor( private http:HttpClient){

     
  }
Allusers(){
  return this.http.get('http://localhost:3000/getAllusers')
}

  deleteuser(id:any){
return this.http.delete('http://localhost:3000/deleteUser/'+id)
   } 

   updateuser(id:any, user: any){
    return this.http.patch('http://localhost:3000/updateAccount/'+id,user)
       } 
getOneuser(email:any){
return this.http.get('http://localhost:3000/user/'+email)
} 

  }