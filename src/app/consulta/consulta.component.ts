import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  
  data=new Array;
  llaves=["folio","nombre","apellido","fecha_de_nacimiento","telefono","email","calle","numero","colonia","ciudad","codigo_postal","fecha_de_registro"];
  actualPag=1;
  permitido=true;
  constructor(private rest:RestService) { 
    this.rest.get20Datos(0).subscribe(data => {
    this.data=Object.entries(data);
  });
    setInterval(this.permitir,1000);
  }

  permitir(){
    this.permitido=!this.permitido;
  }

  actualizar(){
    if(this.permitido){
      this.generar();
    }
  }

  ngOnInit(): void {
    this.rest.getTotal().subscribe(data=>{
      var total=Object.entries(data)[0][1]['COUNT(folio)'];
      var paginas=total/20;
      paginas=total%20!=0&&total>20?paginas++:paginas;
      var botones=document.getElementById('paginas');
      var boton=document.createElement('button');
      var botonA=document.createElement('button');
      paginas=2;
      if(paginas>this.actualPag){
        boton.innerText='Siguiente';
        boton.addEventListener('click',e=>{
          paginas++;
          this.actualPag=paginas*20/20;
          console.log("holak "+this.actualPag);
          this.generar();
          if(paginas>10)botones?.removeChild(boton);
          if(this.actualPag>1){
            botonA.innerText='Anterior';
            botones?.appendChild(botonA);
            botonA.addEventListener('click',e=>{
              paginas--;
              this.actualPag=paginas*20/20;
              this.generar();
              console.log("holak "+this.actualPag);
            });
          }
        });
        botones?.appendChild(boton);
      }else{
        botones?.removeChild(boton);
      }
      return;
    });
  }

  generar(){
    var trAux=document.getElementsByTagName("tr");
    var tdAux=document.getElementsByTagName("td");
    var tabla=document.getElementById("tabla");

    for(var i=0;i<tdAux.length;i++){
      tdAux[i].style.display='none';
    }

    for(var i=1;i<trAux.length;i++){
      tabla?.removeChild(trAux[i]);
    }

    this.rest.get20Datos(this.actualPag-1).subscribe(data => {
      this.data=Object.entries(data);
    });

    var td=null;
    var tr=null;
    var button=document.createElement('checkbox');
    for(var i=0;i<this.data.length;i++){
      tr=document.createElement("tr");
      tr.className='creado';
      td=[];
      for(var c=0;c<this.llaves.length;c++){
        td=document.createElement("td");
        td.innerHTML=this.data[i][1][this.llaves[c]];
        td.style.border="solid 1px #3f51b5";
        td.className='creado';
        td.addEventListener('click',e=>this.generar());
        tr.appendChild(td);
      }
      td=document.createElement("td");
      button=document.createElement("input");
      button.setAttribute('type','checkbox');
      button.setAttribute('name',this.data[i][1]['folio']);
      td.appendChild(button);
      td.style.border="solid 1px #3f51b5";
      tr.appendChild(td);
      console.log(this.data[i][1]['folio']);
      tabla?.appendChild(tr);
    }
  }


  eliminar(folio:string){
    this.rest.eliminarData(folio).subscribe(data=>{
    });
    this.generar();
  }

  borrar(){
    if(!confirm("Seguro de borrar?"))return;
    var check=document.getElementsByTagName('input');
    for(var i=0;i<check.length;i++){
      if(check[i].getAttribute('type')=='checkbox'){
        if(check[i].checked){
          var s=check[i].getAttribute('name');
          s=s==null?'':s;
          this.eliminar(s);
        }
      }
    }
  }
}
