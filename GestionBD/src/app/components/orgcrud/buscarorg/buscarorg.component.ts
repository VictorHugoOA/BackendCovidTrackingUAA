import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarorg',
  templateUrl: './buscarorg.component.html',
  styleUrls: ['./buscarorg.component.css']
})
export class BuscarorgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(org) {
    console.log(org.value);
}
}
