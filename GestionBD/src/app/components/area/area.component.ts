import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreaService } from 'src/app/services/area/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  AltaArea: FormGroup;
  cad: string;
  constructor(private fb: FormBuilder, private area: AreaService) { }

  ngOnInit(): void {
    this.AltaArea = this.fb.group({

      id: ['', Validators.required],
      idOrg: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(200)]],
      desc: ['', [Validators.required, Validators.maxLength(600)]],
      edi: ['', Validators.maxLength(100)],
      piso: ['', Validators.required],
      riesgo: ['', [Validators.required, Validators.maxLength(30)]],
      fecha: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });

  }
  generarQr(){
   this.cad = this.AltaArea.get('id').value;
   console.log(this.cad);
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
        ).subscribe();
    }
  }

}
