import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modarea',
  templateUrl: './modarea.component.html',
  styleUrls: ['./modarea.component.css']
})
export class ModareaComponent implements OnInit {
  AltaArea: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.AltaArea=this.fb.group({
      
        id: ['', Validators.required],
        idOrg: ['', Validators.required],
        name: ['', Validators.required],
        desc: ['', Validators.required],
        edi: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        piso: ['', Validators.required],
        riesgo: ['', Validators.required],
        fecha: ['', Validators.required],
        latitud: ['', Validators.required],
        longitud: ['', Validators.required],

      });
    
  }
  onSubmit() {
    
}
Buscar(area){

}
}
