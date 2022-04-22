import { Component, NgModule, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit {

  nombres='';
  apellidos='';
  fecha_nacimiento='';
  telefono='';
  email='';
  colonia='';
  calle='';
  numero='';
  ciudad='';
  codigo_postal='';

  constructor(private rest: RestService) { 
  }
  

  ngOnInit(): void {
  }

  cosa(){
    if(this.nombres=='')
      alert("El nombre no puede estar vacio");
    else if(this.apellidos=='')
      alert("Los apellidos no pueden estar vacios")
    else if(this.fecha_nacimiento=='')
      alert("Se requiere la fecha de nacimiento")
    else if(this.email=='')
      alert("Se requiere una direcion de correo")
    else{
      var datos="?nombre="+this.nombres+"&apellido="+this.apellidos+"&fecha_de_nacimiento="+
        this.fecha_nacimiento+"&telefono="+this.telefono+"&email="+this.email+"&colonia="+this.colonia+
        "&calle="+this.calle+"&numero="+this.numero+"&ciudad="+this.ciudad+"&codigo_postal="+this.codigo_postal;
      this.rest.postData(datos).subscribe(data=>{
        console.log(data);
      });
      this.nombres='';
      this.apellidos='';
      this.fecha_nacimiento='';
      this.telefono='';
      this.email='';
      this.colonia='';
      this.calle='';
      this.numero='';
      this.ciudad='';
      this.codigo_postal='';
    }
  }

}
