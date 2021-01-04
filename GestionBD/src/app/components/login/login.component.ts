import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  user:Observable<any>;
  constructor(private fb: FormBuilder, private router: Router) {

   /* if()
    {
      if()
      {
        this.router.navigate(['/crear-area']);
      }else{
        this.toastr.error("No es Administrador o no existe el usuario", "Acesso Denegado");
      }
    }*/
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
    
    }
  }


}
