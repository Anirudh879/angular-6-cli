import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault()
    const target = e.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
  
    this.Auth.getUserDetails(username,password)
  }

}
