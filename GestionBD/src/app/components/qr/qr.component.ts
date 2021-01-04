import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  qrdata: string;

  constructor() { }
  @Input() value:string;
  ngOnInit(): void {
      this.qrdata = this.value
  }

}
