import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the OrganizaTusPagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organiza-tus-pagos',
  templateUrl: 'organiza-tus-pagos.html',
})
export class OrganizaTusPagosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad OrganizaTusPagosPage');
  }

  goPagoCuentas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/organiza-tus-pagos/pagoAutomaticoCuentas.html',
      textUrl: 'Pago Automático de Cuentas'
    });
  }

  goRecargas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/organiza-tus-pagos/recargas.html',
      textUrl: 'Recargas'
    });
  }

  goMultiPago():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/organiza-tus-pagos/multipagos.html',
      textUrl: 'Multipago'
    });
  }

  goRealizaAporte():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/organiza-tus-pagos/realizaAportes.html',
      textUrl: 'Realiza tu aporte'
    });
  }

}
