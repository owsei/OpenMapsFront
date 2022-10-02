import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenMapsService } from './services/openmaps.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Componentes*/
import { OpenMapsComponent } from './open-maps/open-maps.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

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
import {DropdownModule} from 'primeng/dropdown';


/*Services*/


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
    HttpClientModule,
    FormsModule,
    //DX
    DxTabPanelModule,
    DxFormModule,
    DxTextAreaModule,
    DxRadioGroupModule,
    //primeng
    TabViewModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [OpenMapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
