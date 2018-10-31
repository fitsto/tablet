import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../../detalle/detalle';

/**
 * Generated class for the ComexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comex',
  templateUrl: 'comex.html',
})
export class ComexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ComexPage');
  }

  goCuentaCorriente(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/comex/cuentaCorriente.html',
      textUrl: 'Cuenta Corriente MX'
    });
  }

  goOrdenDePago(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/comex/ordenDePago.html',
      textUrl: 'Orden de Pago'
    });
  }

  goCartaDeCredito(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/comex/cartaDeCredito.html',
      textUrl: 'Carta de Crédito'
    });
  }

  goCobranza(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/comex/cobranza.html',
      textUrl: 'Cobranza de Exportación e Importación'
    });
  }
}
