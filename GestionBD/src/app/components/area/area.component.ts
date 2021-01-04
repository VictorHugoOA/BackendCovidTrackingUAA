import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AreaService } from 'src/app/services/area/area.service';
import { LoginService } from 'src/app/services/login/login.service';
import { OrgService } from 'src/app/services/organizacion/org.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  AltaArea: FormGroup;
  Id: string;
  Idorg: string;
  organizations: any[] = [];
  constructor(private fb: FormBuilder, private area: AreaService, private org: OrgService, private toastr: ToastrService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
      this.router.navigateByUrl("/Home");
    this.org.mostrarOrganizaciones().subscribe((data: any[]) =>{
      for(let i = 0; i < data.length; ++i){
        this.organizations.push({id: data[i].Id, nombre: data[i].Nombre});
      }
    })
  }

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
  generarQr(){
   this.Id = this.AltaArea.get('id').value;
   this.Idorg = this.AltaArea.get('id').value;
  }

  onSubmit() {
    if(this.AltaArea.valid){
      this.area.crearArea(
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
        ).subscribe((result) => {this.toastr.success("El área se añadió a la base de datos", "Alta área");}, (error) => {this.toastr.error("Ocurrió un error. Intenta cambiando el id del área o vuelve a intentar", "Error")});
    }
  }

}
