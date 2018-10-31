import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanciamientoPage } from './financiamiento/financiamiento';
import { SegurosPage } from './seguros/seguros';
import { TarjetasDeCreditoPage } from './tarjetas-de-credito/tarjetas-de-credito';
import { DetallePage } from '../../detalle/detalle';
import { ProductosDerivadosPage } from './productos-derivados/productos-derivados';
import { ComexPage } from './comex/comex';

/**
 * Generated class for the ApoyateEnNosotrosEmprenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apoyate-en-nosotros-emprender',
  templateUrl: 'apoyate-en-nosotros-emprender.html',
})
export class ApoyateEnNosotrosEmprenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ApoyateEnNosotrosEmprenderPage');
  }

  goFinanciamiento():void{
    this.navCtrl.push(FinanciamientoPage);
  }

  goSeguros():void{
    this.navCtrl.push(SegurosPage);
  }

  goTarjetaCredito():void{
    this.navCtrl.push(TarjetasDeCreditoPage);
  }

  goDepositoPlazo():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/depositoAPlazo.html',
      textUrl: 'Depósitos a Plazo'
    });
  }

  goFondosMutuos():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/fondosMutuos.html',
      textUrl: 'Fondos Mutuos'
    });
  }

  goAcciones():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/acciones.html',
      textUrl: 'Acciones'
    });
  }

  goProdDerivados():void{
    this.navCtrl.push(ProductosDerivadosPage);
  }

  goComex():void{
    this.navCtrl.push(ComexPage);
  }

}
