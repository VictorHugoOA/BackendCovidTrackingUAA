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

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplateformsComponent,
    VisitaformComponent,
    OrganizacionformComponent,
    AreaformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
