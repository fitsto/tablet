import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the GestionaTusTarjetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestiona-tus-tarjetas',
  templateUrl: 'gestiona-tus-tarjetas.html',
})
export class GestionaTusTarjetasPage {

  textUrl:string = 'Gestiona tus tarjetas';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GestionaTusTarjetasPage');
  }

  goBloqueoTarjetas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/gestiona-tus-tarjetas/bloquearTarjetas.html',
      textUrl: 'Bloquear Tarjetas'
    });
  }

  goClienteEnViaje():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/gestiona-tus-tarjetas/clienteEnViaje.html',
      textUrl: 'Cliente en Viaje'
    });
  }

  goCambioClaves():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/gestiona-tus-tarjetas/cambioClaves.html',
      textUrl: 'Cambio de Claves'
    });
  }

  goNotificacionCompras():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/gestiona-tus-tarjetas/notificacionesCompra.html',
      textUrl: 'Notificaciones de Compras'
    });
  }
}
