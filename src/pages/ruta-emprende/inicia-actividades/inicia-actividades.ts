import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComoPage } from './como/como';
import { RequisitosPage } from './requisitos/requisitos';
import { FacturacionPage } from './facturacion/facturacion';

/**
 * Generated class for the IniciaActividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicia-actividades',
  templateUrl: 'inicia-actividades.html',
})
export class IniciaActividadesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad IniciaActividadesPage');
  }

  goComo():void{
    this.navCtrl.push(ComoPage);
  }

  goRequisitos():void{
    this.navCtrl.push(RequisitosPage);
  }

  goFacturacion():void{
    this.navCtrl.push(FacturacionPage);
  }
}

