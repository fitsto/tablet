import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the SegurosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "seguros", segment: "app" })
@Component({
  selector: 'page-seguros',
  templateUrl: 'seguros.html',
})
export class SegurosPage {
  textUrl:string = 'Seguros';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegurosPage');
  }

  goSeguro(html:string, textUrl:string):void{
    this.navCtrl.push(DetallePage,{
      html:`assets/htmls/productos/seguros/${html}.html`,
      textUrl: textUrl
    });
  }

}
