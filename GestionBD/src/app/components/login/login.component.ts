import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/usuario/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:Observable<any>;
  constructor(private fb: FormBuilder, private login: LoginService) {
    this.login.signOut();
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
    if(this.loginForm.valid){
     this.login.signIn(this.loginForm.get('name').value, this.loginForm.get('password').value);
    }
  }


}
