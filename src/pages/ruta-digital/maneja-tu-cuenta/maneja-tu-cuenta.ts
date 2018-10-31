import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the ManejaTuCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maneja-tu-cuenta',
  templateUrl: 'maneja-tu-cuenta.html',
})
export class ManejaTuCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ManejaTuCuentaPage');
  }

  goCartolaHistorica():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/cartolaHistorica.html',
      textUrl: 'Cartola Histórica'
    });
  }

  goCartolaTC():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/cartolaTC.html',
      textUrl: 'Cartola TC'
    });
  }

  goMovimientosTarjeta():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/movimientosTarjeta.html',
      textUrl: 'Movimientos Tarjetas'
    });
  }

  goSaldosInversion():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/saldosInv.html',
      textUrl: 'Saldos de Inversión'
    });
  }

  goValesVista():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/valesVista.html',
      textUrl: 'Vales Vista'
    });
  }

  goMillasAcumuladas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/millasAcumuladas.html',
      textUrl: 'Millas Acumuladas'
    });
  }

  goTransferenciasHistoricas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/maneja-tu-cuenta/transferenciasHistoricas.html',
      textUrl: 'Transferencias Históricas'
    });
  }

}
