import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/area/area.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-verareas',
  templateUrl: './verareas.component.html',
  styleUrls: ['./verareas.component.css']
})
export class VerareasComponent implements OnInit {
  areas: any[]=[];
  constructor(private areasS: AreaService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
  }

  ngOnInit(): void {
    this.areasS.mostrarTodasAreas().subscribe((data:any[]) =>
      {
        for(var i =0; i<data.length;i++){
          this.areas.push(data[i]);
        }
      }
    );
    
  }

}
