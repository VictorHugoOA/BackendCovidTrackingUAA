import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modorg',
  templateUrl: './modorg.component.html',
  styleUrls: ['./modorg.component.css']
})
export class ModorgComponent implements OnInit {
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
