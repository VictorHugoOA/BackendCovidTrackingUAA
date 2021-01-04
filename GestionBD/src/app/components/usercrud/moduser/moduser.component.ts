import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.css']
})
export class ModuserComponent implements OnInit {
AltaUser: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.AltaUser = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      riesgo: ['', Validators.required],
      fecha: ['', Validators.required],
    });
    
  }

  onSubmit() {
    
}
Buscar(user){

}

}
