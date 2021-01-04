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
    this.AltaUser = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      riesgo: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  onSubmit() {}
}
