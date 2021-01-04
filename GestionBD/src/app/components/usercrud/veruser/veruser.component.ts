import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-veruser',
  templateUrl: './veruser.component.html',
  styleUrls: ['./veruser.component.css']
})
export class VeruserComponent implements OnInit {
  usuarios:any[]=[];
  constructor(private users:UserService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
  }

  ngOnInit(): void {
    this.users.mostrarUsuarios().subscribe((data:any[]) =>
    {
      for(var i =0; i<data.length;i++){
        this.usuarios.push(data[i]);
      }
    }
  );
  }

}

