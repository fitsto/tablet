import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosServiceProvider } from '../../providers/productos-service/productos-service';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public productosService: ProductosServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
    this.productosService.getBancas();
  }

  getProductos(banca:string):void{
    console.log(banca);
    this.productosService.getProductos(banca);
  }

  getSubProductos(banca:string,producto:string){
    this.productosService.getSubProductos(banca,producto);
  }
}
