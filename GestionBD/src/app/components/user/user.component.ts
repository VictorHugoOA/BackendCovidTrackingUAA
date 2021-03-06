import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  AltaUser: FormGroup;
  constructor(private fb: FormBuilder, private persona: UserService, private toastr: ToastrService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
  }

  ngOnInit(): void {
    this.AltaUser = this.fb.group({
      user: ['', [Validators.required, Validators.maxLength(100)]],
      name: ['', [Validators.required, Validators.maxLength(300)]],
      email: ['', [Validators.required, Validators.maxLength(200), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pass: ['', [Validators.required, Validators.maxLength(32)]],
      auth: ['', Validators.required],
      riesgo: ['', [Validators.required, Validators.maxLength(30)]],
      fecha: [null],
      tipouser: ['', Validators.required]
    });
  }

  onSubmit() {
    let autF = 0;
    let autImei = 0;
    if (this.AltaUser.valid) {
      if (this.AltaUser.get('auth').value == "Facebook") {
        autF = 1
      }
      else if (this.AltaUser.get('auth').value == "IMEI") {
        autImei = 1
      }
      this.persona.crearUsuario(
        this.AltaUser.get('user').value,
        this.AltaUser.get('name').value,
        this.AltaUser.get('email').value,
        this.AltaUser.get('pass').value,
        autF,
        autImei,
        this.AltaUser.get('riesgo').value,
        this.AltaUser.get('fecha').value,
        this.AltaUser.get('tipouser').value

      ).subscribe((result) => {   this.toastr.success("El usuario se añadió a la base de datos", "Alta usuario");}, (error) => {this.toastr.error("Ocurrió un error. Intenta cambiando el nombre de usuario o vuelve a intentar", "Error")});
    }
  }
}
