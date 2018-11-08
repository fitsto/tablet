import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InversionesPage');
  }

  goAcciones():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_ACCIONES.html',
      textUrl: 'Acciones'
    });
  }

  goApv():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_APV.html',
      textUrl: 'APV'
    });
  }

  goDap():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_DAP.html',
      textUrl: 'DAP'
    });
  }

  goFfmm():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/inversiones/inversiones_FFMM.html',
      textUrl: 'FFMM'
    });
  }

}
