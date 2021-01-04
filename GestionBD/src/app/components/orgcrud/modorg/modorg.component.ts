import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modorg',
  templateUrl: './modorg.component.html',
  styleUrls: ['./modorg.component.css']
})
export class ModorgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f) {
    console.log(f.value);
}
}
