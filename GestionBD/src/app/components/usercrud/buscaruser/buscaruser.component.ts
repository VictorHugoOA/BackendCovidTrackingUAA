import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-buscaruser',
  templateUrl: './buscaruser.component.html',
  styleUrls: ['./buscaruser.component.css']
})
export class BuscaruserComponent implements OnInit {

  user: FormControl;
  constructor(private toastr: ToastrService, private persona: UserService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
    this.user = new FormControl('', [Validators.required]);
  }

  us: any;
  visitas: any[] = [];

  ngOnInit(): void {
  }

  clicked() {
    if (this.user.valid) {
      this.persona.mostrarUsuario(this.user.value).subscribe((data: any) => {
        this.us = data;
        this.visitas = [];
        this.persona.mostrarVisitasUsuario(this.user.value).subscribe((data: any[]) => {
          for(let i = 0; i < data.length; ++i){
            this.visitas.push(data[i]);
          }
        })
      });
    }
    else {
      this.toastr.warning("Por favor, ingresa datos para buscar", "No hay datos");
    }
  }

}
