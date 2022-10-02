import { Component, OnInit } from '@angular/core';
import { OpenMapsService } from '../services/openmaps.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  lines:any[]=[];
  selectedLine:string='';

  constructor(private openMapsService:OpenMapsService) { }


  ngOnInit(): void {

    this.openMapsService.getOpenMapsLines()
      .subscribe((response:any) => {
        this.lines = response;
        console.log(this.lines);
      });

  }

}
