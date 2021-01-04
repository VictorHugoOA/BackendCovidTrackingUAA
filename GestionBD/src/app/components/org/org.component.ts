import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrgService } from 'src/app/services/organizacion/org.service';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  Altaorg: FormGroup
  constructor(private fb: FormBuilder, private org: OrgService, private toastr: ToastrService) { }

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
      this.org.crearOrg(
        this.Altaorg.get('id').value,
        this.Altaorg.get('NOrg').value,
        this.Altaorg.get('desc').value,
        this.Altaorg.get('tipo').value
      ).subscribe((result) => {}, (error) => {this.toastr.error("Ocurrió un error. Intenta cambiando el id de la organización vuelve a intentar", "Error")});
    }
  }

}
