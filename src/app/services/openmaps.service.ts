import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenMapsService {

  constructor(private http:HttpClient) { }

  

  public setPoints(params:HttpParams){
      console.log(params);

      this.http.post('http://localhost/OpenMapsBackEnd/public/setOpenMapsPoints',null,{ params: params })
      .subscribe(res => { 
        console.log('insertado');	
        return 'insertado';	
      },
      err => {
        console.log('no insertado');
        return 'no insertado';	
      }
     );
      
  }

  public getPoints(){
    return this.http.get('localhost/OpenMapsBackEnd/public/setOpenMapsPoints');
  }

  public getOpenMapsLines(){

    return  this.http.get('http://localhost/OpenMapsBackEnd/public/getLines');
  }
}
