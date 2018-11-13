import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';
import { GenioServiceProvider } from '../../../providers/genio-service/genio-service';

/**
 * Generated class for the InversionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inversiones',
  templateUrl: 'inversiones.html',
})

export class InversionesPage {
  textUrl:string = 'Inversiones';
  constructor(public navCtrl: NavController, public navParams: NavParams, public genioService:GenioServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InversionesPage');
  }

  goAcciones():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_ACCIONES.html',
      textUrl: 'Acciones'
    });

    this.genioService.dataGenio.intereses.push({
      producto: 'inversiones',
      subProducto: 'Acciones'
    });
  }

  goApv():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_APV.html',
      textUrl: 'APV'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'inversiones',
      subProducto: 'APV'
    });
  }

  goDap():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_DAP.html',
      textUrl: 'DAP'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'inversiones',
      subProducto: 'DAP'
    });
  }

  goFfmm():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_FFMM.html',
      textUrl: 'FFMM'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'inversiones',
      subProducto: 'FFMM'
    });
  }

}
