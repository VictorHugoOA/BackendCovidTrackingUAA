import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  AltaUser: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
<<<<<<< Updated upstream
    this.AltaUser=this.fb.group({
      
        user: ['', [Validators.required, Validators.pattern("p+[0-9]*$"), Validators.maxLength(10)]],
        name: ['', Validators.required],
        email: ['', Validators.required],
        pass: ['', Validators.required],
        riesgo: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        fecha: ['', [Validators.required, Validators.pattern("^[a-zA-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]]
      });
    
=======
    this.AltaUser = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      riesgo: ['', Validators.required],
      fecha: ['', Validators.required],
    });
>>>>>>> Stashed changes
  }

  onSubmit() {}
}
