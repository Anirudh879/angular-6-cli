import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {  map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private AuthService : AuthService) {}

  ngOnInit() {
   
  }
  isavailable = true;  
  users = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];

            jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
            
            onClickSubmit(data){
              console.log(data)
              this.AuthService.getAllUserProfile().subscribe(data => {
              console.log(data);
            })       
          }   
         
}
