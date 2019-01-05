import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { MenuInicialComponent} from '../menu-inicial/menu-inicial.component';
import { MonitoriasComponent } from '../monitorias/monitorias.component';
import { EditarComponent } from '../editar/editar.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'menuInicial', component: MenuInicialComponent },
  { path: 'monitorias/:area', component: MonitoriasComponent },
  { path: 'editar', component: EditarComponent }
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
