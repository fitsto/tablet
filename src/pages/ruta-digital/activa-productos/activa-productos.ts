import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the ActivaProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activa-productos',
  templateUrl: 'activa-productos.html',
})
export class ActivaProductosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ActivaProductosPage');
  }

  goTarjetaDebito():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/activa/tarjetaDeb.html',
      textUrl: 'Tarjeta de Débito'
    });
  }

  goSuperClave():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/activa/superClave.html',
      textUrl: 'Superclave'
    });
  }

  goTarjetaCredito():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/activa/tarjetaCred.html',
      textUrl: 'Tarjeta de Crédito'
    });
  }

  goPass():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/activa/pass.html',
      textUrl: 'Santander Pass'
    });
  }

  goApp():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/activa/app.html',
      textUrl: 'App Santander'
    });
  }

}
