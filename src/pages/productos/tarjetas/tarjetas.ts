import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';
import { GenioServiceProvider } from '../../../providers/genio-service/genio-service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public genioService:GenioServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetasPage');
  }

  goGold(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_gold.html',
      textUrl: 'Gold'
    });
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: 'Gold'
    });
  }

  goLife(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_life.html',
      textUrl: 'Life'
    });
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: 'Life'
    });
  }

  goLimited(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_limited.html',
      textUrl: 'Limited'
    });
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: 'Limited'
    });
  }

  goPlatinium(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_platinum.html',
      textUrl: 'Platinium'
    });
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: 'Platinium'
    });
  }

  goSuperPuntos(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_super_puntos.html',
      textUrl: 'Super Puntos'
    });
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: 'Super Puntos'
    });
  }

  goWorldMember(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/productos/tarjetas/tajetas_world_member.html',
      textUrl: 'World Member'
    });
    this.genioService.dataGenio.intereses.push({
      poducto: 'Tarjetas',
      subProducto: 'World Member'
    });
  }

}
