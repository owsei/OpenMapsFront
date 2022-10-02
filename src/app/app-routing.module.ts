import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OpenMapsComponent } from './open-maps/open-maps.component';

const routes: Routes = [
  { path: '**', component: MainPageComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'openmaps', component: OpenMapsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
