import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  qrdata: string;
  @Input() idar:string;
  @Input() idorg:string;
  constructor() { }
  
  ngOnInit(): void {
      this.qrdata = "Area " + this.idar + " Organización " + this.idorg;
  }

}
