import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  Altaorg: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.Altaorg=this.fb.group({
      id: ['', [Validators.required, Validators.pattern("p+[0-9]*$"), Validators.maxLength(10)]],
      NOrg: ['', Validators.required],
      desc: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  onSubmit() {
    
}

}
