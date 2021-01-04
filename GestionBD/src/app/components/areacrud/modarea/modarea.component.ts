import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modarea',
  templateUrl: './modarea.component.html',
  styleUrls: ['./modarea.component.css']
})
export class ModareaComponent implements OnInit {
  AltaArea: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.AltaArea=this.fb.group({
      
        id: ['', [Validators.required, Validators.pattern("p+[0-9]*$"), Validators.maxLength(10)]],
        idOrg: ['', Validators.required],
        name: ['', Validators.required],
        desc: ['', Validators.required],
        edi: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        piso: ['', [Validators.required, Validators.pattern("^[a-zA-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
        riesgo: ['', Validators.required],
        fecha: ['', Validators.required],
        latitud: ['', Validators.required],
        longitud: ['', Validators.required],

      });
    
  }
  onSubmit() {
    
}
}
