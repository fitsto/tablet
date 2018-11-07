import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the CreditosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html',
})
export class CreditosPage {
  textUrl:string = 'Creditos';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditosPage');
  }
  
  goComercialCuota(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_comercial_en_cuotas.html',
      textUrl: 'Comercial en cuotas'
    });
  }

  goCompraCartera(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_compra_cartera.html',
      textUrl: 'Compra de cartera'
    });
  }

  goLibreDisponibilidad(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_credito_libre_disponibilidad.html',
      textUrl: 'Libre disponibilidad'
    });
  }

  goLife(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_credito_life.html',
      textUrl: 'Life'
    });
  }

  goCuadroManual(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_cuadro_manual.html',
      textUrl: 'Cuadro manual'
    });
  }

  goCuotaUnica(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_cuota_unica.html',
      textUrl: 'Cuota unica'
    });
  }

  goGarantiaEstatal(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_garantia_estatal.html',
      textUrl: 'Garantia estatal'
    });
  }

  goLineaCreditoAutomatica(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_linea_credito_automatica.html',
      textUrl: 'Linea credito automatica'
    });
  }

  goN1(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_n+1.html',
      textUrl: 'n+1'
    });
  }
}
