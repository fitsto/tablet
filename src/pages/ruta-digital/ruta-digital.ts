import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivaProductosPage } from './activa-productos/activa-productos';
import { AutorizaPage } from './autoriza/autoriza';
import { ManejaTuCuentaPage } from './maneja-tu-cuenta/maneja-tu-cuenta';
import { GestionaTusTarjetasPage } from './gestiona-tus-tarjetas/gestiona-tus-tarjetas';
import { OrganizaTusPagosPage } from './organiza-tus-pagos/organiza-tus-pagos';
import { DisfrutaTuBancoPage } from './disfruta-tu-banco/disfruta-tu-banco';
import { ApoyateEnNosotrosPage } from './apoyate-en-nosotros/apoyate-en-nosotros';

/**
 * Generated class for the RutaDigitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ruta-digital',
  templateUrl: 'ruta-digital.html',
})
export class RutaDigitalPage {
  textUrl:string = 'Digitalízate';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RutaDigitalPage');
  }

  goActiva():void{
    this.navCtrl.push(ActivaProductosPage);
  }

  goAutoriza():void{
    this.navCtrl.push(AutorizaPage);
  }

  goManejaTuCuenta():void{
    this.navCtrl.push(ManejaTuCuentaPage);
  }

  goGestionaTusTarjetas():void{
    this.navCtrl.push(GestionaTusTarjetasPage);
  }

  goOrganizaTusPagos():void{
    this.navCtrl.push(OrganizaTusPagosPage);
  }

  goDisfrutaTuBanco():void{
    this.navCtrl.push(DisfrutaTuBancoPage);
  }

  goApoyateEnNosotros():void{
    this.navCtrl.push(ApoyateEnNosotrosPage);
  }

}
