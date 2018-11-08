import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the TarjetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjetas',
  templateUrl: 'tarjetas.html',
})

export class TarjetasPage {
  textUrl:string = 'Tarjetas';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetasPage');
  }

  goGold(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_gold.html',
      textUrl: 'Gold'
    });
  }

  goLife(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_life.html',
      textUrl: 'Life'
    });
  }

  goLimited(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_limited.html',
      textUrl: 'Limited'
    });
  }

  goPlatinium(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_platinum.html',
      textUrl: 'Platinium'
    });
  }

  goSuperPuntos(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_super_puntos.html',
      textUrl: 'Super Puntos'
    });
  }

  goWorldMember(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_world_member.html',
      textUrl: 'World Member'
    });
  }

}
