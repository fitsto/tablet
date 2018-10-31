import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { clienteModel } from '../../models/cliente-model';

/*
  Generated class for the ClienteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class ClienteServiceProvider {
  cliente:clienteModel;
  rut: number;
  dv: string;
  constructor(public http: HttpClient) {
    //console.log('Hello ClienteServiceProvider Provider');
  }

  iniciarCliente(rut:string=''):void{
    this.cliente = new clienteModel(rut);
  }
  
  cargarCliente(rut:number){
    let params = new HttpParams().set('rut',rut.toString());
    return this.http.get('assets/json/datosCliente.json', {params})
    .map((resp:any)=>{
      console.log(resp);
      this.cliente.digital = resp.indicadores[0];
      //this.cliente.ofertas = resp.ofertas;
      return resp;
    });
  }
}
