import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the AutorizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autoriza',
  templateUrl: 'autoriza.html',
})
export class AutorizaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AutorizaPage');
  }

  goEncuesta():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/autoriza/perfilInversion.html',
      textUrl: 'encuesta perfil de inversión'
    });
  }

  goContratoFondos():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/autoriza/contratoFondos.html',
      textUrl: 'Contrato general de fondos'
    });
  }

  goContratoIntermediacion():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/autoriza/contratoIntermediacion.html',
      textUrl: 'Contrato de Intermediación de valores de CBS'
    });
  }

  goContratoDivisas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/autoriza/contratoDivisas.html',
      textUrl: 'Contrato de compra/venta de divisas'
    });
  }

}
