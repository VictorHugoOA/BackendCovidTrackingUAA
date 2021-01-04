import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/area/area.service';

@Component({
  selector: 'app-verareas',
  templateUrl: './verareas.component.html',
  styleUrls: ['./verareas.component.css']
})
export class VerareasComponent implements OnInit {
  areas: any[]=[];
  constructor(private areasS: AreaService) { }

  ngOnInit(): void {
    this.areasS.mostrarTodasAreas().subscribe((data:any[]) =>
      {
        for(var i =0; i<data.length;i++){
          this.areas.push(data[i]);
        }
      }
    );
    
  }

}
