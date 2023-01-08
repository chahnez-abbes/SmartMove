import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ JwtHelperService} from '@auth0/angular-jwt'
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

ProfilAdmin={
  username:'',
  role:'',
  email:'',
  password:'',
  image:'',
  interest:'',
  phone: '',
  posts: '',
  roles: '',

}

profile: any
  isLoggedIn: Boolean= false 

 helper= new JwtHelperService()
  constructor( private http: HttpClient, private user:UsersService) { }


login(data: any){
  return this.http.post('http://localhost:3000/login',data)
}

saveDataProfile(token:any){
 
  localStorage.setItem('token',token)

 let decod= this.helper.decodeToken(token)



this.user.getOneuser(decod.email).subscribe(res=>{console.log(res)
this.profile=res
  localStorage.setItem('username',this.profile.fname)
  localStorage.setItem('email',this.profile.email)
  localStorage.setItem('roles',this.profile.roles)
  localStorage.setItem('image',this.profile.image)


})

}


LoggedIn(){
  let token:any=localStorage.getItem('token')
  if(!token){
   return false
  }
  let decodeToken=this.helper.decodeToken(token)
 
 
  // if(decodeToken.roles!=='admin'){
  //   return false
  // }

  if(this.helper.isTokenExpired(token)){
    return false
  }

  return true
}

}


