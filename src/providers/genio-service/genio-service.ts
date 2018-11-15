import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaModel } from '../../models/persona-model';
import { clienteModel } from '../../models/cliente-model';
import { genioModel } from '../../models/genio-model';
import * as moment from 'moment';
import { genioEnvioModel } from '../../models/genio-envio-model';

@Injectable()
export class GenioServiceProvider {
  
  public conectado:boolean = false;
  genio: personaModel;
  dataGenio:genioModel;
  constructor(public http: HttpClient) {
  }
  
  sucursal: string;
  iniciarGenio(datos:any = {}):void{
    let rut:string = '';
    let nombre:string = '';
    let apellido:string = '';
    let email:string = '';
    let telefono:number = 569;
    if(datos.rut) rut = datos.rut;
    if(datos.nombre) nombre = datos.nombre;
    if(datos.apellido) apellido = datos.apellido;
    if(datos.email) email = datos.email;
    if(datos.telefono) telefono = parseInt(datos.telefono);
    this.genio = new personaModel(rut,nombre,apellido,email,telefono);
    this.sucursal = '';
    if(datos.sucursal) this.sucursal = datos.sucursal;
  }

  iniciarInteraccionCliente():void{
    let interaccionId:string = moment().unix().toString();
    let fecha:string = moment().format('YYYY-MM-DD');
    let horaInicio:string = moment().format('YYYY-MM-DDTHH:mm:ss');
    //this.dataGenio = new genioModel(interaccionId,this.sucursal,fecha,horaInicio,this.genio);
    this.dataGenio = new genioModel(interaccionId,this.sucursal,fecha,horaInicio,new personaModel());
  }

  terminarInteraccion(cliente:clienteModel):void{
    let horaTermino:string = moment().format('YYYY-MM-DDTHH:mm:ss');
    this.dataGenio.horaTermino = horaTermino;
    //this.dataGenio.cliente = cliente;
    this.dataGenio.cliente = new clienteModel();
  }

  enviarDatos():void{
    let datosGenio:genioEnvioModel = this.dataGenio;
    //if(datosGenio.cliente.planFuturo) delete datosGenio.cliente.planFuturo;
    console.log(datosGenio);
    console.log(JSON.stringify(datosGenio));
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    this.http.post('https://us-central1-andres-wagner.cloudfunctions.net/feedback-genio',datosGenio,{ headers: headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.warn(err);
        }
      );
  }
}
