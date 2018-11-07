import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosServiceProvider } from '../../providers/productos-service/productos-service';
import { CreditosPage } from './creditos/creditos';
import { InversionesPage } from './inversiones/inversiones';
import { PlanesPage } from './planes/planes';
import { SegurosPage } from './seguros/seguros';
import { TarjetasPage } from './tarjetas/tarjetas';

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
  textUrl:string = 'Productos';
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

  goCreditos():void{
    this.navCtrl.push(CreditosPage);
  }

  goInversiones():void{
    this.navCtrl.push(InversionesPage);
  }

  goPlanes():void{
    this.navCtrl.push(PlanesPage);
  }

  goSeguros():void{
    this.navCtrl.push(SegurosPage);
  }

  goTarjetas():void{
    this.navCtrl.push(TarjetasPage);
  }
}
