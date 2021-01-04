import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
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
