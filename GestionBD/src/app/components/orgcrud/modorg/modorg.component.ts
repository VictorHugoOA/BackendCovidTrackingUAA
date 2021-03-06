import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { OrgService } from 'src/app/services/organizacion/org.service';

@Component({
  selector: 'app-modorg',
  templateUrl: './modorg.component.html',
  styleUrls: ['./modorg.component.css']
})
export class ModorgComponent implements OnInit {
  Altaorg: FormGroup
  id: FormControl;
  organizacion: Observable<any>;
  constructor(private fb: FormBuilder, private org: OrgService, private toastr: ToastrService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
    this.id = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    this.Altaorg = this.fb.group({
      id: ['', Validators.required],
      NOrg: ['', [Validators.required, Validators.maxLength(200)]],
      desc: ['', [Validators.required, Validators.maxLength(600)]],
      tipo: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    if(this.Altaorg.valid){
      this.org.actualizarOrg(
        this.Altaorg.get('id').value,
        this.Altaorg.get('NOrg').value,
        this.Altaorg.get('desc').value,
        this.Altaorg.get('tipo').value
      ).subscribe((result) => {this.toastr.success("La organización se actualizó en la base de datos", "Organización actualizada");}, (error) => {this.toastr.error("Ocurrió un error. Intenta cambiando el id de la organización vuelve a intentar", "Error")});
    }
  }
  borrar() {
    this.org.borrarOrg( this.Altaorg.get('id').value)
      .subscribe((data: any) => {
        this.toastr.success(
          'Se ha borrado la organización de la bse de datos',
          'Borrar Organización'
        );
        this.router.navigateByUrl('/crear-org');
      });
  }
  Buscar() {
    if (this.id.valid) {
      this.organizacion = this.org.mostrarOrg(this.id.value);
      this.organizacion.subscribe((data: any) =>{
        this.Altaorg.setValue({
          id: data.Id,
          NOrg: data.Nombre,
          desc: data.Descripcion,
          tipo: data.Tipo
        })
      })
    }
    else {
      this.toastr.warning("Por favor, ingresa datos para buscar", "No hay datos");
    }
  }
}
