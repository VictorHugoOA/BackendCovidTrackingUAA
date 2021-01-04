import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.css']
})
export class ModuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f) {
    console.log(f.value);
}
}
