import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.css']
})
export class ModuserComponent implements OnInit {
AltaUser: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.AltaUser=this.fb.group({
      
        user: ['', [Validators.required, Validators.pattern("p+[0-9]*$"), Validators.maxLength(10)]],
        name: ['', Validators.required],
        email: ['', Validators.required],
        pass: ['', Validators.required],
        riesgo: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        fecha: ['', [Validators.required, Validators.pattern("^[a-zA-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]]
      });
    
  }

  onSubmit() {
    
}
}
