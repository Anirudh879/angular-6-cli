import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUserDetails(username,password){
  //  return this.http.get()
  }

  getAllUserProfile(){
       return  this.http.get("/assets/data.json")    
  }
}
