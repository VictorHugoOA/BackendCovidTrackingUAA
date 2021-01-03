import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { FormsModule } from '@angular/forms'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { VisitaformComponent } from './visitaform/visitaform.component';
import { OrganizacionformComponent } from './organizacionform/organizacionform.component';
import { AreaformComponent } from './areaform/areaform.component';
import { QrComponent } from './components/qr/qr.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AreaComponent } from './components/area/area.component';
import { UserComponent } from './components/user/user.component';
import { OrgComponent } from './components/org/org.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplateformsComponent,
    VisitaformComponent,
    OrganizacionformComponent,
    AreaformComponent,
    QrComponent,
    NavMenuComponent,
    AreaComponent,
    UserComponent,
    OrgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
