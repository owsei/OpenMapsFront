import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items:any[]=[];

  constructor() { }

  ngOnInit() {
    this.items = [
          {
            label:'Pagina principal',
            icon:'pi pi-fw pi-file',
            routerLink: '/mainpage'
          },
        //   {
        //     label:'Mapa',
        //     icon:'pi pi-fw pi-map',
        //     routerLink: '/openmaps'
        //   },
    ];
  }    
}

