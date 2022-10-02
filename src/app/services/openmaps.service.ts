import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenMapsService {

  constructor(private httpClient:HttpClient) { }


  public setPoints(params:HttpParams){
      //console.log(params);
      this.httpClient.put('localhost/OpenMapsBackEnd/public/setOpenMapsPoints',null,{ params: params });
  }

  public getPoints(){

    return this.httpClient.get('localhost/OpenMapsBackEnd/public/setOpenMapsPoints');


  }


  public getOpenMapsLines(){
    this.httpClient.get<string>('http://localhost/OpenMapsBackEnd/public/getLines').subscribe(data => {   // data is already a JSON object
      console.log(data);
  })}

}
