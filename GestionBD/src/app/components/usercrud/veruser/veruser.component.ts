import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-veruser',
  templateUrl: './veruser.component.html',
  styleUrls: ['./veruser.component.css']
})
export class VeruserComponent implements OnInit {
  usuarios:any[]=[];
  constructor(private users:UserService) { }

  ngOnInit(): void {
    this.users.mostrarUsuarios().subscribe((data:any[]) =>
    {
      for(var i =0; i<data.length;i++){
        this.usuarios.push(data[i]);
      }
    }
  );
  }

}

