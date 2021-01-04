import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AreaService } from 'src/app/services/area/area.service';
import { LoginService } from 'src/app/services/login/login.service';
import { OrgService } from 'src/app/services/organizacion/org.service';

@Component({
  selector: 'app-modarea',
  templateUrl: './modarea.component.html',
  styleUrls: ['./modarea.component.css']
})
export class ModareaComponent implements OnInit {
  AltaArea: FormGroup;
  id: FormControl;
  organizations: any[] = [];
<<<<<<< Updated upstream
  constructor(private fb: FormBuilder, private toastr: ToastrService, private area: AreaService,  private router: Router, private org: OrgService) {
=======
  constructor(private fb: FormBuilder, private toastr: ToastrService, private area: AreaService, private org: OrgService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
>>>>>>> Stashed changes
    this.id = new FormControl('', Validators.required);
    this.org.mostrarOrganizaciones().subscribe((data: any[]) => {
      for (let i = 0; i < data.length; ++i) {
        this.organizations.push({ id: data[i].Id, nombre: data[i].Nombre });
      }
    })
  }

  areaC: Observable<any>;

  ngOnInit(): void {
    this.AltaArea = this.fb.group({

      id: ['', Validators.required],
      idOrg: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(200)]],
      desc: ['', [Validators.required, Validators.maxLength(600)]],
      edi: ['', Validators.maxLength(100)],
      piso: ['', Validators.required],
      riesgo: ['', [Validators.required, Validators.maxLength(30)]],
      fecha: [null],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],

    });

  }
  onSubmit() {
    if (this.AltaArea.valid) {
      this.area.actualizarArea(
        this.AltaArea.get('id').value,
        this.AltaArea.get('idOrg').value,
        this.AltaArea.get('name').value,
        this.AltaArea.get('desc').value,
        this.AltaArea.get('edi').value,
        this.AltaArea.get('piso').value,
        null,
        this.AltaArea.get('riesgo').value,
        this.AltaArea.get('fecha').value,
        this.AltaArea.get('latitud').value,
        this.AltaArea.get('longitud').value,
      ).subscribe((result) => { this.toastr.success("Se actualizó el área", "Área actualizada");}, (error) => { this.toastr.error("Ocurrió un error. Intenta cambiando el id del área o vuelve a intentar", "Error") });
    }
  }
  borrar() {
    this.area.borrarArea( this.AltaArea.get('id').value)
      .subscribe((data: any) => {
        this.toastr.success(
          'Se ha borrado el área de la base de datos',
          'Borrar Área'
        );
        this.router.navigateByUrl('/crear-area');
      });
  }
  Buscar() {
    if (this.id.valid) {
      this.areaC = this.area.mostarArea(this.id.value);
      this.areaC.subscribe((data: any) => {
        this.AltaArea.setValue({
          id: data.Id,
          idOrg: data.Id_Organizacion,
          name: data.Nombre,
          desc: data.Descripcion,
          edi: data.Edificio,
          piso: data.Piso,
          riesgo: data.Riesgo,
          fecha: (new Date(data.Fecha_Rojo)),
          latitud: data.Latitud,
          longitud: data.Longitud
        })
      })
    } else {
      this.toastr.warning("Por favor, ingresa datos para buscar", "No hay datos");
    }
  }
}
