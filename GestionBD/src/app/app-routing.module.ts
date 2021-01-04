import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './components/area/area.component';
import { BuscarareaComponent } from './components/areacrud/buscararea/buscararea.component';
import { ModareaComponent } from './components/areacrud/modarea/modarea.component';
import { VerareasComponent } from './components/areacrud/verareas/verareas.component';
import { OrgComponent } from './components/org/org.component';
import { BuscarorgComponent } from './components/orgcrud/buscarorg/buscarorg.component';
import { ModorgComponent } from './components/orgcrud/modorg/modorg.component';
import { VerorgComponent } from './components/orgcrud/verorg/verorg.component';
import { UserComponent } from './components/user/user.component';
import { BuscaruserComponent } from './components/usercrud/buscaruser/buscaruser.component';
import { ModuserComponent } from './components/usercrud/moduser/moduser.component';
import { VeruserComponent } from './components/usercrud/veruser/veruser.component';


const routes: Routes = [
  { path: 'Home',component: AreaComponent},
  { path: 'crear-area', component: AreaComponent},
  { path: 'crear-usuario', component: UserComponent},
  { path: 'crear-org', component: OrgComponent},
  { path: 'mod-area', component: ModareaComponent},
  { path: 'mod-usuario', component: ModuserComponent},
  { path: 'mod-org', component: ModorgComponent},
  { path: 'ver-area', component: VerareasComponent},
  { path: 'ver-usuario', component: VeruserComponent},
  { path: 'ver-org', component: VerorgComponent},
  { path: 'buscar-area', component: BuscarareaComponent},
  { path: 'buscar-usuario', component: BuscaruserComponent},
  { path: 'buscar-org', component: BuscarorgComponent},
  { path: "**", pathMatch: 'full', redirectTo: "Home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
