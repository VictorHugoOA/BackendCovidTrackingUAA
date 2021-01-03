import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areaform',
  templateUrl: './areaform.component.html',
  styleUrls: ['./areaform.component.css']
})
export class AreaformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f) {
    console.log(f.value);
}

}
