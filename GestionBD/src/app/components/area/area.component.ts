import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  AltaArea: FormGroup;
  cad:any;
  constructor(private fb: FormBuilder) { }

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
  generarQr(){
   this.cad = this.AltaArea.get('id').value;
   console.log(this.cad);
  }
  onSubmit() {
    
  }

}
