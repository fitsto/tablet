import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';
import { GenioServiceProvider } from '../../../providers/genio-service/genio-service';

/**
 * Generated class for the PlanesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planes',
  templateUrl: 'planes.html',
})
export class PlanesPage {
  textUrl:string = 'Planes';
  constructor(public navCtrl: NavController, public navParams: NavParams, public genioService:GenioServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanesPage');
  }

  goIn():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/planes/planes_in.html',
      textUrl: 'In'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'Planes',
      subProducto: 'In'
    });
  }

  goLife():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/planes/planes_life.html',
      textUrl: 'Life'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'Planes',
      subProducto: 'Life'
    });
  }

  goLimited():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/planes/planes_limited.html',
      textUrl: 'Limited'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'Planes',
      subProducto: 'Limited'
    });
  }

  goSantanderLatamPass():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/planes/planes_santander_latam_pass.html',
      textUrl: 'Santander Latam Pass'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'Planes',
      subProducto: 'Santander Latam Pass'
    });
  }

  goSuperPuntos():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/planes/planes_super_puntos.html',
      textUrl: 'Super Puntos'
    });
    this.genioService.dataGenio.intereses.push({
      producto: 'Planes',
      subProducto: 'Super Puntos'
    });
  }
}
