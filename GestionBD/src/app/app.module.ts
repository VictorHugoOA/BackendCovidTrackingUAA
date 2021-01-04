/*Modulos*/
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Componentes */
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AreaComponent } from './components/area/area.component';
import { UserComponent } from './components/user/user.component';
import { OrgComponent } from './components/org/org.component';
import { ModareaComponent } from './components/areacrud/modarea/modarea.component';
import { BuscarareaComponent } from './components/areacrud/buscararea/buscararea.component';
import { VerareasComponent } from './components/areacrud/verareas/verareas.component';
import { ModorgComponent } from './components/orgcrud/modorg/modorg.component';
import { BuscarorgComponent } from './components/orgcrud/buscarorg/buscarorg.component';
import { VerorgComponent } from './components/orgcrud/verorg/verorg.component';
import { VeruserComponent } from './components/usercrud/veruser/veruser.component';
import { ModuserComponent } from './components/usercrud/moduser/moduser.component';
import { BuscaruserComponent } from './components/usercrud/buscaruser/buscaruser.component';
import { AreaformComponent } from './areaform/areaform.component';
import { QrComponent } from './components/qr/qr.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AreaformComponent,
    QrComponent,
    NavMenuComponent,
    AreaComponent,
    UserComponent,
    OrgComponent,
    ModareaComponent,
    BuscarareaComponent,
    VerareasComponent,
    ModorgComponent,
    BuscarorgComponent,
    VerorgComponent,
    VeruserComponent,
    ModuserComponent,
    BuscaruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
