import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosServiceProvider } from '../../providers/productos-service/productos-service';
import { CreditosPage } from './creditos/creditos';
import { InversionesPage } from './inversiones/inversiones';
import { PlanesPage } from './planes/planes';
import { SegurosPage } from './seguros/seguros';
import { TarjetasPage } from './tarjetas/tarjetas';
import { GenioServiceProvider } from '../../providers/genio-service/genio-service';

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public productosService: ProductosServiceProvider,
    public genioService: GenioServiceProvider) {
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
    this.genioService.dataGenio.intereses.push({
      poducto: 'Creditos',
      subProducto: ''
    });
  }

  goInversiones():void{
    this.navCtrl.push(InversionesPage);
    this.genioService.dataGenio.intereses.push({
      poducto: 'Inversiones',
      subProducto: ''
    });
  }

  goPlanes():void{
    this.navCtrl.push(PlanesPage);
    this.genioService.dataGenio.intereses.push({
      poducto: 'Planes',
      subProducto: ''
    });
  }

  goSeguros():void{
    this.navCtrl.push(SegurosPage);
    this.genioService.dataGenio.intereses.push({
      poducto: 'Seguros',
      subProducto: ''
    });
  }

  goTarjetas():void{
    this.navCtrl.push(TarjetasPage);
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: ''
    });
  }
}
