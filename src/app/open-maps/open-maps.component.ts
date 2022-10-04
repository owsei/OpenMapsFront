import { Component,Input,OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { HttpParams } from '@angular/common/http';
import { OpenMapsService } from '../services/openmaps.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


export const DEFAULT_LAT = 42.825183;
export const DEFAULT_LON = -1.652176;
export const TITULO = 'Proyecto';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-open-maps',
  templateUrl: './open-maps.component.html',
  styleUrls: ['./open-maps.component.css'],
  providers:[OpenMapsService]
})
export class OpenMapsComponent implements OnInit {


  private map:any;
  private markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
    })
  };

  
  private marcadores:[]=[]
  public lines:any[]=[];
  public selectedLine:number=1;

  selectedPoints: string[] = [];

  private heightMap:string="800px";
  private withMap:string="1080px";
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;

 

  constructor(private openMapsService:OpenMapsService) { }

  ngOnInit(): void {
    
    this.initMap();
    
    this.openMapsService.getOpenMapsLines()
      .subscribe((response:any) => {
        this.lines = response;
      });

    this.map.on("click", (e: { latlng: { lat: number; lng: number; }; }) => {

      console.log(e.latlng); // get the coordinates
      let params= new HttpParams()
          .set('idLine',this.selectedLine)
          .set('latitude',e.latlng.lat)
          .set('longitude',e.latlng.lng);
      console.log("mando a servicio");
      this.openMapsService.setPoints(params);
      
      L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon).addTo(this.map); // add the marker onclick
    });

  }

  public cargarLinea(){
    

  }
  private initMap(): void {
    var iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;

    //configuración del mapa
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: false,
      zoom: 14
    });

    //titulo
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Peter OBrian'
    });

    tiles.addTo(this.map);
    

    //marca con pop up
    const lon = this.lon + 0.009;
    const lat = this.lat + 0.009;
    const marker = L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
    marker.addTo(this.map);

    //marca forma de circulo
    const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
    mark.addTo(this.map);


    this.map.on("click", function() {

      console.log("marcado");
      
    });

    
  }
}
