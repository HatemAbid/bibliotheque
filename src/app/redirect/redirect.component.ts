import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from '../oauth.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private active:ActivatedRoute,private serv:OauthService,private router:Router) { }

  ngOnInit(): void {
    this.active.queryParamMap.pipe(concatMap(x=>this.serv.getAcessToken(x.get('code')) ))
    .subscribe(data=>this.router.navigate(['/dashboard']),err=>{console.log(err)});
  }

}
