import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'paginaCliente', segment:'pagina-cliente/:rut'})
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
  rut: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rut = navParams.get('rut');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

}
