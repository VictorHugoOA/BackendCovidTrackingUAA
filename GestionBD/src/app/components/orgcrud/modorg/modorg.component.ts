import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modorg',
  templateUrl: './modorg.component.html',
  styleUrls: ['./modorg.component.css']
})
export class ModorgComponent implements OnInit {
  Altaorg: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.Altaorg=this.fb.group({
      id: ['', Validators.required],
      NOrg: ['', Validators.required],
      desc: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  onSubmit() {
    
}
}
