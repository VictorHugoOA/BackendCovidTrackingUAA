import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AreaService } from 'src/app/services/area/area.service';

@Component({
  selector: 'app-buscararea',
  templateUrl: './buscararea.component.html',
  styleUrls: ['./buscararea.component.css']
})
export class BuscarareaComponent implements OnInit {

  constructor(private toastr: ToastrService, private area: AreaService) {
    this.id = new FormControl('', [Validators.required]);
  }

  id: FormControl;
  areaG: Observable<any>;

  ngOnInit(): void {
  }
  onSubmit(area) {
    console.log(area.value);
  }
  clicked() {
    if (this.id.valid) {
      this.areaG = this.area.mostarArea(this.id.value);
    } else {
      this.toastr.warning("Por favor, ingresa datos para buscar", "No hay datos");
    }
  }
}
