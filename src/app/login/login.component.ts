import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from '../oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  AuthUrl:string;
  constructor(private serv: OauthService , private router: Router) { }

  ngOnInit(): void {
    this.serv.GetAuthPage().subscribe(reponse=>this.AuthUrl=reponse["authUrl"],error=>{console.log(error)});
  }

  login()
  {
    this.router.navigate(['/test'],{queryParams:{url:this.AuthUrl}});
  }

}
