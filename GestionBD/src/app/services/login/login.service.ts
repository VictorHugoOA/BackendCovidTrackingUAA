import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from '../usuario/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public submitted: boolean = false;
  user: Observable<any>;
  constructor(private usuario: UserService, private router: Router, private toastr: ToastrService) {
    this.submitted = JSON.parse(sessionStorage.getItem("init"));
  }

  signOut(){
    this.submitted = false;
    sessionStorage.removeItem("init");
  }

  signedIn(): boolean{
    return sessionStorage.getItem("init") !== null ? true : false;
  }

  signIn(user: string, pass: string){
    this.user = this.usuario.mostrarUsuario(user);
    this.user.subscribe((data: any) =>{
      if(data.Contrasena == pass){
        if(data.Admin == 1){
          this.submitted = true;
          sessionStorage.setItem("init", JSON.stringify(this.submitted));
          this.router.navigateByUrl("/crear-area");
        }
         else{
          this.toastr.error("Usted no tiene permisos de administrador", "Error");
          this.submitted = false;
         }
      }
      else{
        this.toastr.error("La contraseña del usuario no coincide", "Error");
        this.submitted = false;
      }
    })
  }

}
