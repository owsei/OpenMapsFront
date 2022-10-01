import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Componentes*/
import { OpenMapsComponent } from './open-maps/open-maps.component';
import { MainPageComponent } from './main-page/main-page.component';

/*DX */
import { DxTabPanelModule } from "devextreme-angular/ui/tab-panel"
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';

/*PRIMENG*/
import {TabViewModule} from 'primeng/tabview';
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenMapsComponent,
    MainPageComponent,
    MenuComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //DX
    DxTabPanelModule,
    DxFormModule,
    DxTextAreaModule,
    DxRadioGroupModule,
    //primeng
    TabViewModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
