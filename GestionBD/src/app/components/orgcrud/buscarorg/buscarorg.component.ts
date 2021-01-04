import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { OrgService } from 'src/app/services/organizacion/org.service';

@Component({
  selector: 'app-buscarorg',
  templateUrl: './buscarorg.component.html',
  styleUrls: ['./buscarorg.component.css']
})
export class BuscarorgComponent implements OnInit {

  constructor(private toastr: ToastrService, private org: OrgService, private login: LoginService, private router: Router) {
    if(!this.login.signedIn())
    this.router.navigateByUrl("/Home");
    this.id = new FormControl('', [Validators.required]);
  }

  organizacion: Observable<any>;
  id: FormControl;

  ngOnInit(): void {
  }
  clicked(){
    if(this.id.valid){
      this.organizacion = this.org.mostrarOrg(this.id.value);
    }
    else{
      this.toastr.warning("Por favor, ingresa datos para buscar", "No hay datos");
    }
  }
}
