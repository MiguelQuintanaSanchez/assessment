import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  llaves=["folio","nombre","apellido","fecha_de_nacimiento","telefono","email","calle","numero","colonia","ciudad","codigo_postal","fecha_de_registro"];
  private url='http://localhost:80/rest/post.php';
  
  constructor(private http:HttpClient) { }
  
  getData(){
    //let url='https://api.chucknorris.io/jokes/random';
    
    return this.http.get(this.url);
  }

  getTotal(){
    return this.http.get(this.url+"?total=1");
  }

  postData(datos:string){
    console.warn(this.url+datos);
    return this.http.post<any>(this.url+datos,{});
  }

  get20Datos(ultimo:number){
    console.warn(this.url+"?ultimo="+ultimo)
    return this.http.get(this.url+"?ultimo="+ultimo);
  }

  eliminarData(folio:string){
    return this.http.put(this.url+"?folio="+folio+"&eliminado=1",true);
  }
}
