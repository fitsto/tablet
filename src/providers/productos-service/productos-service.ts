import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';

/*
  Generated class for the ProductosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosServiceProvider {
  bancas:any[] = [];
  productos:any[] = [];
  subProductos:any[] = [];
  constructor(public http: HttpClient) {
    console.log('Hello ProductosServiceProvider Provider');
  }

  getBancas():void{
    this.productos = [];
    this.subProductos = [];
    /*this.db.collection<any[]>('productos').valueChanges().subscribe((bancas)=>{
      this.bancas = bancas;
      //console.log(bancas);
    },
    error => {
      console.log(error);
    });*/
  }
  
  getProductos(banca:string):void{
    this.subProductos = [];
    /*this.db.collection<any[]>(`/productos/${banca}/productos_${banca}`).valueChanges()
    .pipe(
      map((productos:any) => {
        for (let index = 0; index < productos.length; index++) {
          productos[index].banca = banca;
          
        }
        return productos
        })
      )
    .subscribe((productos)=>{
      this.productos = productos;
      //console.log(this.productos);
    },
    error => {
      console.log(error);
    });*/
  }

  getSubProductos(banca:string, producto:string){
    /*this.db.collection<any[]>(`/productos/${banca}/productos_${banca}/${producto}/${producto}_productos_${banca}`).valueChanges()
    .subscribe((subProducto)=>{
      this.subProductos = subProducto;
      //console.log(subProducto);
    });*/
  }
}
