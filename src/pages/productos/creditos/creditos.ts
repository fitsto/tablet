import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';
import { GenioServiceProvider } from '../../../providers/genio-service/genio-service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public genioService:GenioServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditosPage');
  }
  
  goComercialCuota(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_comercial_en_cuotas.html',
      textUrl: 'Comercial en cuotas'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Comercial en cuotas'
    });
  }

  goCompraCartera(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_compra_cartera.html',
      textUrl: 'Compra de cartera'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Compra de cartera'
    });
  }

  goLibreDisponibilidad(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_credito_libre_disponibilidad.html',
      textUrl: 'Libre disponibilidad'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Libre disponibilidad'
    });
  }

  goLife(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_credito_life.html',
      textUrl: 'Life'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Life'
    });
  }

  goCuadroManual(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_cuadro_manual.html',
      textUrl: 'Cuadro manual'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Cuadro manual'
    });
  }

  goCuotaUnica(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_cuota_unica.html',
      textUrl: 'Cuota unica'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Cuota unica'
    });
  }

  goGarantiaEstatal(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_garantia_estatal.html',
      textUrl: 'Garantia estatal'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Garantia estatal'
    });
  }

  goLineaCreditoAutomatica(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_linea_credito_automatica.html',
      textUrl: 'Linea credito automatica'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'Linea credito automatica'
    });
  }

  goN1(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/creditos/Creditos_n+1.html',
      textUrl: 'n+1'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'creditos',
      subProducto: 'n+1'
    });
  }
}
