import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { OrgService } from 'src/app/services/organizacion/org.service';

@Component({
  selector: 'app-verorg',
  templateUrl: './verorg.component.html',
  styleUrls: ['./verorg.component.css']
})
export class VerorgComponent implements OnInit {
  orgs:any[]=[]
  constructor(private orgS: OrgService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
  }

  ngOnInit(): void {
    this.orgS.mostrarOrganizaciones().subscribe((data:any[]) =>
    {
      for(var i =0; i<data.length;i++){
        this.orgs.push(data[i]);
      }
    }
  );
  }

}
