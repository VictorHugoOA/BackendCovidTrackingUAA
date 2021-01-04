import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscararea',
  templateUrl: './buscararea.component.html',
  styleUrls: ['./buscararea.component.css']
})
export class BuscarareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(area) {
    console.log(area.value);
}
}
