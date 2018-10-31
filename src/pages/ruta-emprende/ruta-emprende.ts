import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreaTuEmpresaPage } from './crea-tu-empresa/crea-tu-empresa';
import { IniciaActividadesPage } from './inicia-actividades/inicia-actividades';
import { AbreCuentaPage } from './abre-cuenta/abre-cuenta';
import { ActivateDigitalmentePage } from './activate-digitalmente/activate-digitalmente';
import { DisenaTuWebPage } from './disena-tu-web/disena-tu-web';
import { ApoyateEnNosotrosEmprenderPage } from './apoyate-en-nosotros-emprender/apoyate-en-nosotros-emprender';
import { PotenciaTuNegocioPage } from './potencia-tu-negocio/potencia-tu-negocio';

/**
 * Generated class for the RutaEmprendePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ruta-emprende',
  templateUrl: 'ruta-emprende.html',
})
export class RutaEmprendePage {
  
  textUrl:string = 'Emprende';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutaEmprendePage');
  }

  goCreaTuEmpresa():void{
    this.navCtrl.push(CreaTuEmpresaPage);
  }

  goIniciaActividades():void{
    this.navCtrl.push(IniciaActividadesPage);
  }

  goAbreCuenta():void{
    this.navCtrl.push(AbreCuentaPage);
  }

  goAbreActivate():void{
    this.navCtrl.push(ActivateDigitalmentePage);
  }

  goDisenaTuWeb():void{
    this.navCtrl.push(DisenaTuWebPage);
  }

  goApoyateEnNosotros(){
    this.navCtrl.push(ApoyateEnNosotrosEmprenderPage);
  }

  goPotenciaTuNegocio(){
    this.navCtrl.push(PotenciaTuNegocioPage);
  }
}
