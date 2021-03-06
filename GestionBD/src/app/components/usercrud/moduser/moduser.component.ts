import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.css'],
})
export class ModuserComponent implements OnInit {
  AltaUser: FormGroup;
  uu: FormControl;
  usuario: Observable<any>
  constructor(private fb: FormBuilder, private persona: UserService, private toastr: ToastrService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
    this.uu = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
    this.AltaUser = this.fb.group({
      user: ['', [Validators.required, Validators.maxLength(100)]],
      name: ['', [Validators.required, Validators.maxLength(300)]],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(200),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      pass: ['', [Validators.required, Validators.maxLength(32)]],
      auth: ['', Validators.required],
      riesgo: ['', [Validators.required, Validators.maxLength(30)]],
      fecha: [null],
      tipouser: ['', Validators.required],
    });
  }
  borrar() {
    this.persona.borrarUsuario( this.AltaUser.get('user').value)
      .subscribe((data: any) => {
        this.toastr.success(
          'Se ha borrado el usuario de la bse de datos',
          'Borrar Usuario'
        );
        this.router.navigateByUrl('/crear-usuario');
      });
  }

  onSubmit() {
    let autF = 0;
    let autImei = 0;
    if (this.AltaUser.valid) {
      if (this.AltaUser.get('auth').value == 'Facebook') {
        autF = 1;
      } else if (this.AltaUser.get('auth').value == 'IMEI') {
        autImei = 1;
      }
      this.persona
        .actualizarUsuario(
          this.AltaUser.get('user').value,
          this.AltaUser.get('name').value,
          this.AltaUser.get('email').value,
          this.AltaUser.get('pass').value,
          autF,
          autImei,
          this.AltaUser.get('riesgo').value,
          this.AltaUser.get('fecha').value,
          this.AltaUser.get('tipouser').value
        )
        .subscribe(
          (result) => {
            this.toastr.success(
              'Se actualizó el usuario',
              'Usuario actualizado'
            );
          },
          (error) => {
            this.toastr.error(
              'Ocurrió un error. Intenta cambiando el nombre de usuario o vuelve a intentar',
              'Error'
            );
          }
        );
    }
  }
  Buscar() {
    console.log(this.uu);
    if (this.uu.valid) {
      this.usuario = this.persona.mostrarUsuario(this.uu.value);
      this.usuario.subscribe((data: any) => {
        let aut = '';
        if (data.AutFacebook == 1) {
          aut = 'Facebook';
        } else if (data.IMEI) {
          aut = 'IMEI';
        }
        this.AltaUser.setValue({
          user: data.Usuario,
          name: data.Nombre,
          email: data.Correo,
          pass: data.Contrasena,
          auth: aut,
          riesgo: data.Riesgo,
          fecha: new Date(data.Fecha_Rojo),
          tipouser: data.Admin,
        });
      });
    } else {
      this.toastr.warning(
        'Por favor, ingresa datos para buscar',
        'No hay datos'
      );
    }
  }
}
